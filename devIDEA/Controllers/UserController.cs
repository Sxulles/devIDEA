using devIDEA.Models;
using devIDEA.Models.Repositories;
using Npgsql;
using Microsoft.AspNetCore.Mvc;

namespace devIDEA.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpPost("/User/create/{username}, {email}, {password}")]
    public IActionResult CreateUser(string username, string email, string password)
    {
        var repository = new UserRepository(new NpgsqlConnection(ConnectionData.connectionString));

        return Ok(repository.CreateUser(username, email, password));
    }
    
}