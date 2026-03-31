using Microsoft.EntityFrameworkCore;
using YourProject.Data;
using YourProject.Hubs;
using YourProject.Middleware;   // ← required for UseAuditLogging()

var builder = WebApplication.CreateBuilder(args);

// ─── SERVICES ─────────────────────────────────────────────────────────────────
builder.Services.AddOpenApi();
builder.Services.AddSignalR();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();

// Add your other scoped services here
builder.Services.AddScoped<YourProject.Services.ReportService>();

// ─── CORS ──────────────────────────────────────────────────────────────────────
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNextJS", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader()       // allows X-Employee-Id and Authorization
              .AllowCredentials();
    });
});

// ─── JWT AUTHENTICATION ────────────────────────────────────────────────────────
// Keep your existing AddAuthentication / AddJwtBearer here — not removed.

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ─── MIDDLEWARE PIPELINE (ORDER MATTERS) ──────────────────────────────────────
app.UseRouting();
app.UseCors("AllowNextJS");
app.UseAuthentication();    // 1. Decode JWT → populate HttpContext.User
app.UseAuthorization();     // 2. Enforce [Authorize] attributes
app.UseAuditLogging();      // 3. Read claims AFTER auth so actor is available

app.MapControllers();
app.MapHub<AttendanceHub>("/hubs/attendance");

app.MapGet("/weatherforecast", () =>
{
    var summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild",
        "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
    return Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast(
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]))
        .ToArray();
}).WithName("GetWeatherForecast");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}