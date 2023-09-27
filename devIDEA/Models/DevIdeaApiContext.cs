using Microsoft.EntityFrameworkCore;

namespace devIDEA.Models;

public class DevIdeaApiContext : DbContext
{
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            "Server=localhost,1433;Database=DevIdea;User Id=sa;Password=DevForce153;");
    }
}