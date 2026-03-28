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

        // --- 1. FETCH ALL ---
        [HttpGet("accounts")]
        public async Task<IActionResult> GetAllAccounts()
        {
            var users = await _context.Users
                .Select(u => new {
                    id         = u.Id,         // ✅ lowercase to match TypeScript
                    name       = u.Name,
                    employeeId = u.EmployeeId,
                    role       = u.Role,
                    department = u.Department,
                    status     = u.Status ?? "ACTIVE"
                })
                .ToListAsync();

            return Ok(users);
        }

        // --- 2. PROVISION ---
        [HttpPost("provision")]
        public async Task<IActionResult> ProvisionAccount([FromBody] UserRegistrationDto model)
        {
            if (model == null ||
                string.IsNullOrWhiteSpace(model.Name) ||
                string.IsNullOrWhiteSpace(model.EmployeeId) ||
                string.IsNullOrWhiteSpace(model.Role) ||
                string.IsNullOrWhiteSpace(model.Department) ||
                string.IsNullOrWhiteSpace(model.Password))
            {
                return BadRequest(new { message = "ALL FIELDS ARE REQUIRED." });
            }

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

        // --- 3. UPDATE ---
        [HttpPut("update-account/{id}")]
        public async Task<IActionResult> UpdateAccount(int id, [FromBody] UpdateAccountDto model)
        {
            Console.WriteLine($"[UPDATE] ID: {id} | Name: {model?.Name} | EmpId: {model?.EmployeeId}");

            if (model == null)
                return BadRequest(new { message = "INVALID DATA." });

            var user = await _context.Users.FindAsync(id);
            Console.WriteLine($"[UPDATE] User found: {user != null}");

            if (user == null)
                return NotFound(new { message = "ACCOUNT NOT FOUND." });

            var cleanNewId = model.EmployeeId.Trim().ToUpper();

            // Check if new ID is taken by someone else
            if (user.EmployeeId != cleanNewId)
            {
                bool idExists = await _context.Users
                    .AnyAsync(u => u.EmployeeId == cleanNewId && u.Id != id);
                if (idExists)
                    return BadRequest(new { message = "EMPLOYEE ID ALREADY IN USE." });
            }

            user.Name       = model.Name.Trim().ToUpper();
            user.EmployeeId = cleanNewId;
            user.Role       = model.Role.Trim().ToUpper();
            user.Department = model.Department.Trim().ToUpper();

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine($"[UPDATE] Success for ID: {id}");
                return Ok(new { message = "UPDATED" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[UPDATE ERROR] {ex.Message}");
                Console.WriteLine($"[UPDATE INNER] {ex.InnerException?.Message}");
                return StatusCode(500, new { 
                    message = ex.InnerException?.Message ?? ex.Message 
                });
            }
        }

        // --- 4. REVOKE ---
        [HttpPut("revoke-account/{id}")]
        public async Task<IActionResult> RevokeAccount(int id)
        {
            Console.WriteLine($"[REVOKE] ID received: {id}");

            try
            {
                var user = await _context.Users.FindAsync(id);
                Console.WriteLine($"[REVOKE] User found: {user != null}");

                if (user == null)
                    return NotFound(new { message = "USER NOT FOUND" });

                user.Status = "INACTIVE";
                _context.Entry(user).Property(u => u.Status).IsModified = true;

                await _context.SaveChangesAsync();
                Console.WriteLine($"[REVOKE] Success for ID: {id}");
                return Ok(new { message = "ACCESS REVOKED" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[REVOKE ERROR] {ex.Message}");
                Console.WriteLine($"[REVOKE INNER] {ex.InnerException?.Message}");
                return StatusCode(500, new { 
                    message = ex.InnerException?.Message ?? ex.Message 
                });
            }
        }

        // --- 5. REACTIVATE ---
[HttpPut("reactivate-account/{id}")]
public async Task<IActionResult> ReactivateAccount(int id)
{
    Console.WriteLine($"[REACTIVATE] ID received: {id}");
    try
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
            return NotFound(new { message = "USER NOT FOUND" });

        user.Status = "ACTIVE";
        _context.Entry(user).Property(u => u.Status).IsModified = true;
        await _context.SaveChangesAsync();

        Console.WriteLine($"[REACTIVATE] Success for ID: {id}");
        return Ok(new { message = "ACCESS RESTORED" });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"[REACTIVATE ERROR] {ex.Message}");
        return StatusCode(500, new { message = ex.InnerException?.Message ?? ex.Message });
    }
}
    }

    public class UserRegistrationDto
    {
        public string Name       { get; set; } = string.Empty;
        public string EmployeeId { get; set; } = string.Empty;
        public string Role       { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public string Password   { get; set; } = string.Empty;
    }

    public class UpdateAccountDto
    {
        public string Name       { get; set; } = string.Empty;
        public string EmployeeId { get; set; } = string.Empty;
        public string Role       { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
    }
}