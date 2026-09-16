import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session11() {
  return (
    <Layout
      title="Session 11 — GUI and Connectivity with SQL Database"
      description="Windows Forms GUI and SQL Server Database Connectivity using C#"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 11 — GUI and Connectivity with SQL Database</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Build simple Windows Forms applications and connect them to SQL Server database.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 11</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define GUI and its advantages</li>
            <li>Identify tools used for creating GUI applications in C#</li>
            <li>Create Windows Forms applications</li>
            <li>Work with common controls (Label, TextBox, Button, DataGridView, etc.)</li>
            <li>Understand ADO.NET and database connectivity</li>
            <li>Connect a C# application to SQL Server</li>
            <li>Perform Insert, Update, Delete and Select operations</li>
          </ul>

          <hr />

          <h2>1. Introduction to GUI</h2>
          <p>GUI stands for <strong>Graphical User Interface</strong>. It allows users to interact with the application using visual elements such as buttons, text boxes, menus, and windows instead of typing commands.</p>

          <h3>Advantages of GUI</h3>
          <ul>
            <li>User-friendly</li>
            <li>Easier to learn and use</li>
            <li>More interactive</li>
            <li>Reduces the chance of errors</li>
          </ul>

          <hr />

          <h2>2. Creating a Windows Forms Application</h2>

          <h3>Steps in Visual Studio</h3>
          <ol>
            <li>Open Visual Studio</li>
            <li>Create a new project → <strong>Windows Forms App</strong> (.NET Framework or .NET)</li>
            <li>Give a name (example: StudentApp)</li>
            <li>Click Create</li>
          </ol>

          <p>You will see a form (Form1) where you can drag and drop controls.</p>

          <hr />

          <h2>3. Common Windows Forms Controls</h2>

          <table>
            <thead>
              <tr>
                <th>Control</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Label</td>
                <td>Display text</td>
              </tr>
              <tr>
                <td>TextBox</td>
                <td>Take input from user</td>
              </tr>
              <tr>
                <td>Button</td>
                <td>Perform an action when clicked</td>
              </tr>
              <tr>
                <td>ComboBox</td>
                <td>Dropdown list</td>
              </tr>
              <tr>
                <td>CheckBox</td>
                <td>Select multiple options</td>
              </tr>
              <tr>
                <td>RadioButton</td>
                <td>Select one option</td>
              </tr>
              <tr>
                <td>DataGridView</td>
                <td>Display data in table format</td>
              </tr>
              <tr>
                <td>ListBox</td>
                <td>Display list of items</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Simple Windows Forms Example</h2>

          <pre>
            <code>{`// Drag a TextBox (txtName), Button (btnGreet) and Label (lblMessage)

private void btnGreet_Click(object sender, EventArgs e)
{
    string name = txtName.Text;
    lblMessage.Text = $"Hello, {name}! Welcome to Aptech.";
}`}</code>
          </pre>

          <hr />

          <h2>5. Introduction to Database Connectivity (ADO.NET)</h2>
          <p>ADO.NET is the technology used in .NET to connect and work with databases.</p>

          <h3>Main Components</h3>
          <ul>
            <li><strong>Connection</strong> – Establishes connection to database</li>
            <li><strong>Command</strong> – Executes SQL queries</li>
            <li><strong>DataReader</strong> – Reads data in forward-only mode</li>
            <li><strong>DataAdapter</strong> – Fills DataSet / DataTable</li>
            <li><strong>DataSet / DataTable</strong> – Stores data in memory</li>
          </ul>

          <hr />

          <h2>6. Connecting to SQL Server</h2>

          <h3>Connection String Example</h3>
          <pre>
            <code>{`string connectionString = @"Data Source=.;Initial Catalog=StudentDB;Integrated Security=True";

// Or for SQL Server Authentication
// string connectionString = @"Data Source=.;Initial Catalog=StudentDB;User ID=sa;Password=yourpassword";`}</code>
          </pre>

          <h3>Required Namespace</h3>
          <pre>
            <code>{`using System.Data.SqlClient;`}</code>
          </pre>

          <hr />

          <h2>7. Performing CRUD Operations</h2>

          <h3>7.1 Insert Data</h3>
          <pre>
            <code>{`private void btnInsert_Click(object sender, EventArgs e)
{
    try
    {
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            string query = "INSERT INTO Students (Name, Age, Course) VALUES (@Name, @Age, @Course)";
            SqlCommand cmd = new SqlCommand(query, con);

            cmd.Parameters.AddWithValue("@Name", txtName.Text);
            cmd.Parameters.AddWithValue("@Age", Convert.ToInt32(txtAge.Text));
            cmd.Parameters.AddWithValue("@Course", txtCourse.Text);

            con.Open();
            cmd.ExecuteNonQuery();
            MessageBox.Show("Student added successfully!");
        }
    }
    catch (Exception ex)
    {
        MessageBox.Show("Error: " + ex.Message);
    }
}`}</code>
          </pre>

          <h3>7.2 Display Data in DataGridView</h3>
          <pre>
            <code>{`private void LoadData()
{
    using (SqlConnection con = new SqlConnection(connectionString))
    {
        string query = "SELECT * FROM Students";
        SqlDataAdapter da = new SqlDataAdapter(query, con);
        DataTable dt = new DataTable();
        da.Fill(dt);
        dataGridView1.DataSource = dt;
    }
}`}</code>
          </pre>

          <h3>7.3 Update Data</h3>
          <pre>
            <code>{`string query = "UPDATE Students SET Name=@Name, Age=@Age, Course=@Course WHERE Id=@Id";
SqlCommand cmd = new SqlCommand(query, con);

cmd.Parameters.AddWithValue("@Name", txtName.Text);
cmd.Parameters.AddWithValue("@Age", Convert.ToInt32(txtAge.Text));
cmd.Parameters.AddWithValue("@Course", txtCourse.Text);
cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

con.Open();
cmd.ExecuteNonQuery();
MessageBox.Show("Record updated successfully!");`}</code>
          </pre>

          <h3>7.4 Delete Data</h3>
          <pre>
            <code>{`string query = "DELETE FROM Students WHERE Id=@Id";
SqlCommand cmd = new SqlCommand(query, con);
cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

con.Open();
cmd.ExecuteNonQuery();
MessageBox.Show("Record deleted successfully!");`}</code>
          </pre>

          <hr />

          <h2>8. Complete Student Management Example (Overview)</h2>

          <p>Recommended Form Design:</p>
          <ul>
            <li>TextBoxes: Id, Name, Age, Course</li>
            <li>Buttons: Insert, Update, Delete, Clear, Refresh</li>
            <li>DataGridView to display all students</li>
          </ul>

          <pre>
            <code>{`// On Form Load
private void Form1_Load(object sender, EventArgs e)
{
    LoadData();
}

// After Insert / Update / Delete
LoadData();   // Refresh the grid`}</code>
          </pre>

          <hr />

          <h2>9. Important SQL Commands</h2>
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>SQL Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Insert</td>
                <td><code>INSERT INTO Table VALUES (...)</code></td>
              </tr>
              <tr>
                <td>Update</td>
                <td><code>UPDATE Table SET column=value WHERE condition</code></td>
              </tr>
              <tr>
                <td>Delete</td>
                <td><code>DELETE FROM Table WHERE condition</code></td>
              </tr>
              <tr>
                <td>Select</td>
                <td><code>SELECT * FROM Table</code></td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>10. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a simple Windows Form that takes Name and Age and displays a greeting message when a button is clicked.</p>

          <h3>Exercise 2</h3>
          <p>Create a form with TextBoxes for Product Name, Price and Quantity. Insert the data into a SQL Server table.</p>

          <h3>Exercise 3</h3>
          <p>Display all records from a table in a DataGridView.</p>

          <h3>Exercise 4</h3>
          <p>Add Update and Delete functionality to the Student form.</p>

          <hr />

          <h2>11. Session Challenge</h2>
          <p>Build a complete <strong>Student Management System</strong> with the following features:</p>
          <ul>
            <li>Add new student</li>
            <li>Update existing student</li>
            <li>Delete student</li>
            <li>Display all students in DataGridView</li>
            <li>Clear form fields</li>
            <li>Proper validation and error handling using try-catch</li>
          </ul>

          <hr />

          <h2>12. Session Quiz</h2>
          <ol>
            <li>What is GUI?</li>
            <li>Name any five Windows Forms controls.</li>
            <li>What is ADO.NET?</li>
            <li>What is a Connection String?</li>
            <li>Which method is used to execute INSERT, UPDATE, DELETE commands?</li>
            <li>What is the difference between DataReader and DataAdapter?</li>
            <li>Why do we use parameterized queries?</li>
            <li>What is the purpose of DataGridView?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Advanced Concepts in C#</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
