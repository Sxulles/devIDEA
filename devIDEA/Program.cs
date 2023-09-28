using devIDEA.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using devIDEA.Middleware;
using devIDEA.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ??
                       throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt();

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

// CORS Policy Settings
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsMiddleware", builder =>
    {
        builder
            .WithOrigins("https://localhost:44403")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("CorsMiddleware");

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapRazorPages();

// app.UseCorsMiddleware();

app.MapFallbackToFile("index.html");

void InitializeDb()
{
    using var db = new DevIdeaApiContext();
    InitializeCities();
    PrintCities();

    void InitializeCities()
    {
        db.Add(new User { UserName = "Tom", Email = "test1@gmail.com", Password = "12345", RegistrationTime = "2022"});
        db.Add(new User { UserName = "Andy", Email = "test2@gmail.com", Password = "12323145", RegistrationTime ="2022"});
        db.Add(new User { UserName = "Carl", Email = "test3@gmail.com", Password = "12145", RegistrationTime = "2022"});
        db.SaveChanges();
    }

    void PrintCities()
    {
        foreach (var user in db.Users)
        {
            Console.WriteLine($"{user.Id}, {user.UserName}, {user.Email}, {user.RegistrationTime}");
        }
    }
}

InitializeDb();

app.Run();