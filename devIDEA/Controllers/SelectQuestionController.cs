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
        "What is your favorite color?",
        "Most preferred programming language?",
        "What is your favorite chocolate?",
        "Which frontend style do you prefer?",
        "How many hours would you spend for the project on weekly bases?",
        "How much chuck could a woodchuck chuck? (kg)"
    };

    private Dictionary<string, string[]> answers = new Dictionary<string, string[]>();

    [HttpGet("/selectGetQuestions")]
    public IActionResult SelectGetQuestions()
    {
        answers = new Dictionary<string, string[]>()
        {
            {_notFinalQuestions[0], new []{"Blue", "Red", "Yellow", "Black"}},
            {_notFinalQuestions[1], new []{"JavaScript", "C#", "Python", "C++", "TypeScript"}},
            {_notFinalQuestions[2], new []{"Milka", "Boci", "Tibi", "Snickers", "Mars", "Bounty"}},
            {_notFinalQuestions[3], new []{"Minimal", "Gothic", "Colourful", "Abstract", "Mono"}},
            {_notFinalQuestions[4], new []{"0 - 5", "5 - 10", "10 - 15", "15 - 20", "20 - 25", "25+"}},
            {_notFinalQuestions[5], new []{"0 - 7", "7 - 15", "15 - 25", "25 - 35", "35 - 50", "50+"}}
        };
        
        return Ok(answers);
    }

}
