namespace devIDEA.Models.Repositories;
using Npgsql;

public class UserRepository
{
    private readonly NpgsqlConnection _connection;

    public UserRepository(NpgsqlConnection connection)
    {
        _connection = connection;
    }
    
    public int CreateUser(string username, string email, string password)
    {
        _connection.Open();
        var adapter = new NpgsqlDataAdapter(
            "INSERT INTO users (username, email, password, registration_time) VALUES (:username, :email, :password, :registration_time) RETURNING id",
            _connection
        );
        adapter.SelectCommand?.Parameters.AddWithValue(":username", username);
        adapter.SelectCommand?.Parameters.AddWithValue(":email", email);
        adapter.SelectCommand?.Parameters.AddWithValue(":password", password);
        adapter.SelectCommand?.Parameters.AddWithValue(":registration_time", DateTime.Now);

        var lastInsertId = (int)adapter.SelectCommand?.ExecuteScalar();
        _connection.Close();

        return lastInsertId;
    }
}