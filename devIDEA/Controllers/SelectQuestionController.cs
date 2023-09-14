using devIDEA.Models;
using devIDEA.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace devIDEA.Controllers;


[ApiController]
[Route("[controller]")]
public class SelectQuestionController : ControllerBase
{
    private List<string> _notFinalQuestions = new List<string>()
    {
        "What is it a that is it?",
        "Samson 116 Are you here?",
        "Do you like a fish sticks?",
        "Have a lunch at Casa Bonita?",
        "Pine apple or Apple pine?",
        "Que pasa?"
    };

    [HttpGet("/selectGetQuestions")]
    public IActionResult SelectGetQuestions()
    {
        return Ok(_notFinalQuestions);
    }

}
