using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourProject.Data;
using YourProject.Models;
using BCrypt.Net;

namespace YourProject.Controllers
{
    [Route("api/admin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        // --- 1. FETCH ALL ACCOUNTS ---
        [HttpGet("accounts")]
        public async Task<IActionResult> GetAllAccounts()
        {
            var users = await _context.Users
                .Select(u => new {
                    id         = u.Id,
                    name       = u.Name,
                    employeeId = u.EmployeeId,
                    role       = u.Role,
                    department = u.Department,
                    status     = u.Status ?? "ACTIVE"
                })
                .ToListAsync();

            return Ok(users);
        }

        // --- 2. FETCH LOGIN AUDIT LOGS (UPDATED FOR STABILITY) ---
        [HttpGet("login-logs")]
        public async Task<IActionResult> GetLoginLogs()
        {
            try
            {
                // We use a manual projection to handle "Unknown" users gracefully
                // This prevents the "Backend Error" when an ID doesn't match the Users table
                var logs = await _context.LoginLogs
                    .Select(log => new
                    {
                        log.Id,
                        log.EmployeeId,
                        log.IpAddress,
                        log.Status,
                        log.Timestamp,
                        // Sub-query to get user info if it exists
                        UserDetail = _context.Users
                            .Where(u => u.EmployeeId == log.EmployeeId)
                            .Select(u => new { u.Name, u.Role })
                            .FirstOrDefault()
                    })
                    .OrderByDescending(l => l.Timestamp)
                    .ToListAsync();

                // Format the data for the Indigo Frontend
                var result = logs.Select(l => new {
                    id = l.Id,
                    // If UserDetail is null, label as UNKNOWN so the UI can highlight it
                    user = l.UserDetail?.Name ?? $"UNKNOWN [{l.EmployeeId}]",
                    role = l.UserDetail?.Role ?? "UNAUTHORIZED_ACTOR",
                    ipAddress = l.IpAddress == "::1" ? "127.0.0.1" : l.IpAddress,
                    status = l.Status?.ToUpper() ?? "FAILED",
                    timestamp = l.Timestamp.ToString("yyyy-MM-dd HH:mm:ss"),
                    device = "AXIOM_CORE_V2"
                });

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "KERNEL_LOG_FETCH_FAILURE: " + ex.Message });
            }
        }

        // --- 3. PROVISION ACCOUNT ---
        [HttpPost("provision")]
        public async Task<IActionResult> ProvisionAccount([FromBody] UserRegistrationDto model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.EmployeeId))
                return BadRequest(new { message = "ALL FIELDS ARE REQUIRED." });

            var cleanId = model.EmployeeId.Trim().ToUpper();

            if (await _context.Users.AnyAsync(u => u.EmployeeId == cleanId))
                return BadRequest(new { message = "EMPLOYEE ID ALREADY REGISTERED." });

            var user = new User
            {
                Name         = model.Name.Trim().ToUpper(),
                EmployeeId   = cleanId,
                Role         = model.Role.Trim().ToUpper(),
                Department   = model.Department.Trim().ToUpper(),
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Status       = "ACTIVE",
                CreatedAt    = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(new { message = "PROVISIONED" });
        }

        // --- 4. UPDATE ACCOUNT ---
        [HttpPut("update-account/{id}")]
        public async Task<IActionResult> UpdateAccount(int id, [FromBody] UpdateAccountDto model)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound(new { message = "ACCOUNT NOT FOUND." });

            user.Name       = model.Name.Trim().ToUpper();
            user.EmployeeId = model.EmployeeId.Trim().ToUpper();
            user.Role       = model.Role.Trim().ToUpper();
            user.Department = model.Department.Trim().ToUpper();

            await _context.SaveChangesAsync();
            return Ok(new { message = "UPDATED" });
        }

        // --- 5. REVOKE ACCESS ---
        [HttpPut("revoke-account/{id}")]
        public async Task<IActionResult> RevokeAccount(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound(new { message = "USER NOT FOUND" });

            user.Status = "INACTIVE";
            _context.Entry(user).Property(u => u.Status).IsModified = true;

            await _context.SaveChangesAsync();
            return Ok(new { message = "ACCESS REVOKED" });
        }

        // --- 6. REACTIVATE ACCESS ---
        [HttpPut("reactivate-account/{id}")]
        public async Task<IActionResult> ReactivateAccount(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound(new { message = "USER NOT FOUND" });

            user.Status = "ACTIVE";
            _context.Entry(user).Property(u => u.Status).IsModified = true;
            
            await _context.SaveChangesAsync();
            return Ok(new { message = "ACCESS RESTORED" });
        }
    }

    // --- SUPPORTING DTOs ---
    public class UserRegistrationDto {
        public string Name { get; set; } = string.Empty;
        public string EmployeeId { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class UpdateAccountDto {
        public string Name { get; set; } = string.Empty;
        public string EmployeeId { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
    }
}