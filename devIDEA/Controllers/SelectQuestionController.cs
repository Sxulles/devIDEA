using devIDEA.Models;
using Duende.IdentityServer.EntityFramework.Entities;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace devIDEA.Controllers;

[ApiController]
[Route("[controller]")]
public class SelectQuestionController : ControllerBase
{
    private List<string> _notFinalQuestions = new List<string>()
    {
        "What is your favorite color?",
        "Most preferred programming language?",
        "What is your favorite chocolate?",
        "Which frontend style do you prefer?",
        "How many hours would you spend for the project on weekly bases?",
        "How much chuck could a woodchuck chuck? (kg)"
    };


    [HttpGet("/selectGetQuestions")]
    public ActionResult<IEnumerable<object>> SelectGetQuestions()
    {
        try
        {
            return Ok(
                new List<object>
                {
                    new { question = _notFinalQuestions[0], answers = new[] { "Blue", "Red", "Yellow", "Black" }},
                    new { question = _notFinalQuestions[1], answers = new[] { "JavaScript", "C#", "Python", "C++", "TypeScript" }},
                    new { question= _notFinalQuestions[2], answers = new[] { "Milka", "Boci", "Tibi", "Snickers", "Mars", "Bounty" }},
                    new { question= _notFinalQuestions[3], answers = new[] { "Minimal", "Gothic", "Colourful", "Abstract", "Mono" }},
                    new { question= _notFinalQuestions[4], answers = new[] { "0 - 5", "5 - 10", "10 - 15", "15 - 20", "20 - 25", "25+" }},
                    new { question= _notFinalQuestions[5], answers = new[] { "0 - 7", "7 - 15", "15 - 25", "25 - 35", "35 - 50", "50+" }}, 
                }
            );
        }
        catch (Exception e)
        {
            return BadRequest(Array.Empty<object>());
        }
    }
}
