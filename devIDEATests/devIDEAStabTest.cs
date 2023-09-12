namespace devIDEATests;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        var result = 2;
        Assert.That(result, Is.EqualTo(2));
    }
}