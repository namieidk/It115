using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourProject.Data; 
using YourProject.Models; 
using BCrypt.Net;

namespace YourProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        // --- LOGIN METHOD ---
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            string cleanId = model.EmployeeId?.Trim().ToUpper() ?? "";
            string attempt = model.Password ?? "";
            string clientIp = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "127.0.0.1";

            // 1. Find the User
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EmployeeId == cleanId);
            
            // 2. Multi-case Password Verification
            bool isValid = false;
            if (user != null)
            {
                isValid = BCrypt.Net.BCrypt.Verify(attempt, user.PasswordHash) ||
                          BCrypt.Net.BCrypt.Verify(attempt.Trim(), user.PasswordHash) ||
                          BCrypt.Net.BCrypt.Verify(attempt.ToUpper(), user.PasswordHash) ||
                          BCrypt.Net.BCrypt.Verify(attempt.ToLower(), user.PasswordHash);
            }

            // 3. --- SAVE TO DATABASE (Using your LoginLogs model) ---
            try 
            {
                var auditLog = new LoginLog // Exactly matching your LoginLogs.cs
                {
                    EmployeeId = cleanId,
                    IpAddress = clientIp == "::1" ? "127.0.0.1" : clientIp,
                    Status = isValid ? "SUCCESS" : "FAILED",
                    Timestamp = DateTime.UtcNow
                };

                _context.LoginLogs.Add(auditLog); 
                await _context.SaveChangesAsync();
                
                // Debug line to your Console/Terminal
                Console.WriteLine($"[AUDIT] Saved record for {cleanId}: {auditLog.Status}");
            }
            catch (Exception ex)
            {
                // If this prints in your terminal, it means your Database Table name 
                // doesn't match what EF Core expects.
                Console.WriteLine($"[AUDIT ERROR] {ex.Message}");
            }

            // 4. Return response
            if (user == null) return Unauthorized(new { message = "Identity Not Found" });
            if (!isValid) return Unauthorized(new { message = "Password Incorrect" });
            if (user.Status == "INACTIVE") return Unauthorized(new { message = "Access Revoked" });

            return Ok(new { 
                message = "Success", 
                user = new { name = user.Name, role = user.Role, employeeId = user.EmployeeId } 
            });
        }

        // --- PROVISION METHOD ---
        [HttpPost("provision")]
        public async Task<IActionResult> Provision([FromBody] ProvisionModel model)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(model.Password))
                    return BadRequest(new { message = "Password required." });

                string cleanId = model.EmployeeId?.Trim().ToUpper() ?? "";
                if (await _context.Users.AnyAsync(u => u.EmployeeId == cleanId))
                    return BadRequest(new { message = "ID already exists." });

                var user = new User
                {
                    Name = model.Name?.Trim().ToUpper(),
                    EmployeeId = cleanId,
                    Role = model.Role?.ToUpper(),
                    Department = model.Department?.ToUpper(),
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password.Trim()),
                    CreatedAt = DateTime.UtcNow,
                    Status = "ACTIVE"
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok(new { message = "User Provisioned Successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Server Error", detail = ex.Message });
            }
        }
    }

    // DTOs (Data Transfer Objects)
    public class ProvisionModel {
        public string Name { get; set; } = "";
        public string EmployeeId { get; set; } = "";
        public string Role { get; set; } = "";
        public string Department { get; set; } = "";
        public string Password { get; set; } = "";
    }

    public class LoginModel {
        public string EmployeeId { get; set; } = "";
        public string Password { get; set; } = "";
    }
}