namespace devIDEA.Models;

public class Idea
{
    public string Name { get; set; }
    public bool Visibility { get; set; }
    public string Platform_Id { get; set; }
    public string Category { get; set; }
    public string Preferred_Prog_Lang_Id { get; set; }
    public string Backend_Framework_Id { get; set; }
    public string Frontend_Framework_Id { get; set; }
    public string Database_Id { get; set; }
    public string Created_By_User_Id { get; set; }
    public DateTime Creation_Time { get; set; }

}