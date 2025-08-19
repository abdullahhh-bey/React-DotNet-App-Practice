using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Add services (Dependency Injection)

// Add controllers
builder.Services.AddControllers();

// Enable Swagger for API testing
builder.Services.AddEndpointsApiExplorer();

// Add DbContext (replace AppDbContext with your context)

var connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<UserAppDbContext>(options =>
    options.UseSqlServer(connection));

// Enable CORS for React frontend (important!)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000") // React dev server
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// 2. Configure Middleware
app.UseHttpsRedirection();

// Enable CORS
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
