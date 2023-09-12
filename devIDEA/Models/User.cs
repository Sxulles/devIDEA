namespace devIDEA.Models;

public class User
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; }
    public List<string> Ideas { get; }
    public DateTime RegistrationTime { get; }
    
}