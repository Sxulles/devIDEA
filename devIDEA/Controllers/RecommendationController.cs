using Microsoft.AspNetCore.Mvc;

namespace devIDEA.Controllers;

public class RecommendationController : Controller
{
    [HttpGet]
    [Route("/getRecommendation")]
    public IActionResult GetRecommendation()
    {
        try
        {
            return Ok("success");
        }
        catch (Exception e)
        {
            return BadRequest("error");
        }
    }
}