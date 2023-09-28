using devIDEA.Models;
// using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace devIDEA.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet("/GetUserByName/{name}")]
    public async Task<ActionResult<string>> GetUserByName(string name)
    {
        await using var dbContext = new DevIdeaApiContext();
        var user = dbContext.Users.FirstOrDefault(c => c.UserName == name);
        if (user == null)
        {
            return NotFound($"User {name} not found");
        }
        else
        {
            return Ok(user);
        }
    }
}