namespace devIDEA.Models;

public class User
{
    public int Id { get; init; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    // public List<string> Ideas { get; set; }
    public string RegistrationTime { get; set; }
    
}