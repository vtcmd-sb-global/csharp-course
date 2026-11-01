import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session11() {
  return (
    <Layout
      title="Session 11 — GUI and Connectivity with SQL Database"
      description="Windows Forms GUI and SQL Server Database Connectivity using C#"
    >
      <CustomLayout>
        <article className="session-content">
        <style>{`
            article code:not(pre code) {
              background-color: #f4f4f4;
              color: #d10057;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: Consolas, Monaco, monospace;
              font-size: 0.9em;
            }
          `}</style>
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
            <li>Handle Windows Forms events (Click, Load, TextChanged, etc.)</li>
            <li>Use common dialogs (MessageBox, OpenFileDialog, SaveFileDialog, ColorDialog, FontDialog)</li>
            <li>Understand the basics of GDI+ for drawing and graphics</li>
            <li>Recognize how GDI+ relates to CAD / CAM style applications</li>
            <li>Understand the difference between Windows Forms and ASP.NET Web Forms</li>
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

          <CodeBlock
          language="csharp"
            code={`// Drag a TextBox (txtName), Button (btnGreet) and Label (lblMessage)

private void btnGreet_Click(object sender, EventArgs e)
{
    string name = txtName.Text;
    lblMessage.Text = $"Hello, {name}! Welcome to Aptech.";
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>4.5 Windows Forms Events</h2>

          <p>
            Almost everything a user does in a Windows Forms application generates an <strong>event</strong>.
            Events are notifications that something has happened (a button was clicked, a form was loaded,
            text changed in a TextBox, a mouse moved over a control, etc.).
          </p>

          <p>
            In Windows Forms you normally handle events by writing an <strong>event handler</strong> method.
            Visual Studio can generate the method signature for you when you double-click a control
            or select an event in the Properties window.
          </p>

          <h3>Common Windows Forms Events</h3>

          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>When it fires</th>
                <th>Typical use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Click</code></td>
                <td>User clicks a Button, Label, PictureBox, etc.</td>
                <td>Perform an action</td>
              </tr>
              <tr>
                <td><code>Load</code></td>
                <td>Form is about to be displayed for the first time</td>
                <td>Initialize controls, load data</td>
              </tr>
              <tr>
                <td><code>TextChanged</code></td>
                <td>Text inside a TextBox changes</td>
                <td>Live search / validation</td>
              </tr>
              <tr>
                <td><code>SelectedIndexChanged</code></td>
                <td>Selection in ComboBox or ListBox changes</td>
                <td>React to user choice</td>
              </tr>
              <tr>
                <td><code>FormClosing</code></td>
                <td>Form is about to close</td>
                <td>Ask user to save changes</td>
              </tr>
              <tr>
                <td><code>Paint</code></td>
                <td>Control needs to be redrawn</td>
                <td>Custom drawing with GDI+</td>
              </tr>
            </tbody>
          </table>

          <h3>Example – Handling Multiple Events</h3>

          <CodeBlock
            language="csharp"
            code={`// Form Load event – good place for initialization
private void Form1_Load(object sender, EventArgs e)
{
    cmbCourse.Items.Add("C# Programming");
    cmbCourse.Items.Add("SQL Server");
    cmbCourse.Items.Add("ASP.NET Core");
    cmbCourse.SelectedIndex = 0;
}

// Button Click event
private void btnSave_Click(object sender, EventArgs e)
{
    if (string.IsNullOrWhiteSpace(txtName.Text))
    {
        MessageBox.Show("Please enter a name.", "Validation", 
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
        return;
    }
    // ... save logic
}

// TextBox TextChanged – live feedback
private void txtName_TextChanged(object sender, EventArgs e)
{
    lblCharCount.Text = $"Characters: {txtName.Text.Length}";
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            Remember: the signature of most event handlers is
            <code>void HandlerName(object sender, EventArgs e)</code>.
            The <code>sender</code> is the control that raised the event;
            <code>e</code> contains extra information about the event.
          </p>

          <hr />

          <h2>4.6 Dialogs in Windows Forms</h2>

          <p>
            Dialogs are special windows used to communicate with the user or to let the user
            choose files, colors, fonts, etc. Windows Forms provides several ready-made dialogs.
          </p>

          <h3>MessageBox</h3>

          <p>
            You have already seen <code>MessageBox.Show</code>. It is the simplest dialog and is
            perfect for showing information, warnings, or asking simple Yes/No questions.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Simple information
MessageBox.Show("Record saved successfully!");

// With title and icon
MessageBox.Show("Are you sure you want to delete this record?",
                "Confirm Delete",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Question);

// Check the result
DialogResult result = MessageBox.Show("Save changes before closing?",
                                      "Unsaved Changes",
                                      MessageBoxButtons.YesNoCancel,
                                      MessageBoxIcon.Warning);

if (result == DialogResult.Yes)
{
    // Save logic
}
else if (result == DialogResult.Cancel)
{
    // Cancel the close operation
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Common Dialog Controls</h3>

          <table>
            <thead>
              <tr>
                <th>Dialog</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>OpenFileDialog</code></td>
                <td>Let the user choose a file to open</td>
              </tr>
              <tr>
                <td><code>SaveFileDialog</code></td>
                <td>Let the user choose a location and name to save a file</td>
              </tr>
              <tr>
                <td><code>FolderBrowserDialog</code></td>
                <td>Let the user select a folder</td>
              </tr>
              <tr>
                <td><code>ColorDialog</code></td>
                <td>Let the user pick a color</td>
              </tr>
              <tr>
                <td><code>FontDialog</code></td>
                <td>Let the user choose a font, size and style</td>
              </tr>
            </tbody>
          </table>

          <h3>Example – OpenFileDialog and ColorDialog</h3>

          <CodeBlock
            language="csharp"
            code={`// Open a text file
private void btnOpen_Click(object sender, EventArgs e)
{
    using (OpenFileDialog ofd = new OpenFileDialog())
    {
        ofd.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
        ofd.Title = "Select a text file";

        if (ofd.ShowDialog() == DialogResult.OK)
        {
            string content = File.ReadAllText(ofd.FileName);
            txtContent.Text = content;
        }
    }
}

// Change the background color of a panel
private void btnChooseColor_Click(object sender, EventArgs e)
{
    using (ColorDialog cd = new ColorDialog())
    {
        if (cd.ShowDialog() == DialogResult.OK)
        {
            panelPreview.BackColor = cd.Color;
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            Always check the return value of <code>ShowDialog()</code>. It returns a
            <code>DialogResult</code> (<code>OK</code>, <code>Cancel</code>, <code>Yes</code>, <code>No</code>, etc.).
            Only continue if the user confirmed the action.
          </p>

          <hr />

          <h2>4.7 GDI+ — Graphical Device Interface</h2>

          <p>
            <strong>GDI+</strong> (Graphical Device Interface Plus) is the graphics subsystem that
            Windows Forms uses for drawing. It allows you to draw lines, shapes, text, and images
            on a form or control.
          </p>

          <p>
            GDI+ is useful when you need custom drawing that standard controls cannot provide —
            for example simple charts, diagrams, logos, or interactive drawing areas.
          </p>

          <h3>Basic Drawing Example</h3>

          <p>
            The most common place to draw is inside the <code>Paint</code> event of a form or a Panel.
          </p>

          <CodeBlock
            language="csharp"
            code={`private void panelDraw_Paint(object sender, PaintEventArgs e)
{
    Graphics g = e.Graphics;

    // Draw a blue rectangle
    g.DrawRectangle(Pens.Blue, 20, 20, 150, 80);

    // Fill a red ellipse
    g.FillEllipse(Brushes.Red, 200, 20, 100, 80);

    // Draw text
    g.DrawString("Hello GDI+", this.Font, Brushes.Black, 20, 120);

    // Draw a line
    g.DrawLine(Pens.Green, 20, 160, 280, 160);
}

// Force the panel to repaint when needed
private void btnRedraw_Click(object sender, EventArgs e)
{
    panelDraw.Invalidate();   // Triggers the Paint event
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Important GDI+ Classes</h3>

          <ul>
            <li><code>Graphics</code> – the drawing surface (you obtain it from <code>PaintEventArgs</code>)</li>
            <li><code>Pen</code> – used for outlines (lines, borders)</li>
            <li><code>Brush</code> – used for filling shapes (SolidBrush, LinearGradientBrush, etc.)</li>
            <li><code>Font</code> – for drawing text</li>
            <li><code>Image</code> / <code>Bitmap</code> – for loading and drawing pictures</li>
          </ul>

          <h3>Relation to CAD / CAM</h3>

          <p>
            <strong>CAD</strong> (Computer-Aided Design) and <strong>CAM</strong> (Computer-Aided Manufacturing)
            applications rely heavily on custom graphics. Although professional CAD systems use
            specialized graphics engines, the same fundamental ideas appear when you work with GDI+:
          </p>

          <ul>
            <li>Drawing geometric shapes (lines, circles, arcs, polygons)</li>
            <li>Zooming, panning and transforming coordinates</li>
            <li>Selecting and highlighting objects with the mouse</li>
            <li>Displaying precise measurements and grids</li>
          </ul>

          <p>
            A simple student project that lets the user draw lines or rectangles on a Panel
            using mouse events and GDI+ is a good first step toward understanding how
            CAD-style applications work. Full commercial CAD/CAM systems are far more complex
            and usually built with OpenGL, DirectX or specialized libraries, but the basic
            concepts of a graphics context, pens, brushes and coordinate systems start with GDI+.
          </p>

          <hr />

          <h2>4.8 ASP.NET Web Forms (Overview)</h2>

          <p>
            So far this session has focused on <strong>Windows Forms</strong> — desktop GUI applications
            that run on a Windows computer. Another important GUI technology in the .NET ecosystem
            is <strong>ASP.NET Web Forms</strong>.
          </p>

          <h3>What is ASP.NET Web Forms?</h3>

          <p>
            ASP.NET Web Forms is a framework for building web applications that look and feel
            somewhat similar to Windows Forms. You design pages visually, drag controls onto a
            design surface, and write event handlers for button clicks, dropdown changes, etc.
          </p>

          <p>
            Key characteristics:
          </p>
          <ul>
            <li>Runs in a web browser (not as a desktop program)</li>
            <li>Uses <code>.aspx</code> pages and a code-behind file (similar to Form1.cs)</li>
            <li>Supports server-side controls (Button, TextBox, GridView, etc.)</li>
            <li>Uses a page life-cycle and ViewState to maintain state between postbacks</li>
            <li>Was very popular for enterprise web applications, especially with .NET Framework</li>
          </ul>

          <h3>Windows Forms vs ASP.NET Web Forms</h3>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Windows Forms</th>
                <th>ASP.NET Web Forms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Runs on</td>
                <td>Desktop (Windows)</td>
                <td>Web browser (any OS)</td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>Installed on each computer</td>
                <td>Deployed to a web server</td>
              </tr>
              <tr>
                <td>UI technology</td>
                <td>GDI+ / native Windows controls</td>
                <td>HTML + CSS + JavaScript (rendered by browser)</td>
              </tr>
              <tr>
                <td>Event model</td>
                <td>Direct client-side events</td>
                <td>Server-side events via postback</td>
              </tr>
              <tr>
                <td>State management</td>
                <td>In-memory objects</td>
                <td>ViewState, Session, etc.</td>
              </tr>
              <tr>
                <td>Modern status</td>
                <td>Still used for desktop tools</td>
                <td>Largely replaced by ASP.NET Core MVC / Razor Pages / Blazor for new projects</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Important note for students:</strong> ASP.NET Web Forms is part of the older
            .NET Framework. New web development today almost always uses <strong>ASP.NET Core</strong>
            (MVC, Razor Pages, or Blazor). However, many companies still maintain existing
            Web Forms applications, so understanding the basic idea is still valuable.
          </p>

          <p>
            In this course the main GUI focus is Windows Forms (desktop). You will meet modern
            web development concepts later when you study ASP.NET Core.
          </p>

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
          <CodeBlock
          language="csharp"
            code={`string connectionString = @"Data Source=.;Initial Catalog=StudentDB;Integrated Security=True";

// Or for SQL Server Authentication
// string connectionString = @"Data Source=.;Initial Catalog=StudentDB;User ID=sa;Password=yourpassword";`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Required Namespace</h3>
          <CodeBlock
          language="csharp"
            code={`using System.Data.SqlClient;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>7. Performing CRUD Operations</h2>

          <h3>7.1 Insert Data</h3>
          <CodeBlock
          language="csharp"
            code={`private void btnInsert_Click(object sender, EventArgs e)
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
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>7.2 Display Data in DataGridView</h3>
          <CodeBlock
          language="csharp"
            code={`private void LoadData()
{
    using (SqlConnection con = new SqlConnection(connectionString))
    {
        string query = "SELECT * FROM Students";
        SqlDataAdapter da = new SqlDataAdapter(query, con);
        DataTable dt = new DataTable();
        da.Fill(dt);
        dataGridView1.DataSource = dt;
    }
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>7.3 Update Data</h3>
          <CodeBlock
          language="csharp"
            code={`string query = "UPDATE Students SET Name=@Name, Age=@Age, Course=@Course WHERE Id=@Id";
SqlCommand cmd = new SqlCommand(query, con);

cmd.Parameters.AddWithValue("@Name", txtName.Text);
cmd.Parameters.AddWithValue("@Age", Convert.ToInt32(txtAge.Text));
cmd.Parameters.AddWithValue("@Course", txtCourse.Text);
cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

con.Open();
cmd.ExecuteNonQuery();
MessageBox.Show("Record updated successfully!");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>7.4 Delete Data</h3>
          <CodeBlock
          language="csharp"
            code={`string query = "DELETE FROM Students WHERE Id=@Id";
SqlCommand cmd = new SqlCommand(query, con);
cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

con.Open();
cmd.ExecuteNonQuery();
MessageBox.Show("Record deleted successfully!");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>8. Complete Student Management Example (Overview)</h2>

          <p>
            This section brings together everything you have learned in this session —
            Windows Forms controls, events, dialogs, and ADO.NET — into one practical
            Student Management application.
          </p>

          <h3>What the Form Looks Like</h3>

          <p>Here is a realistic example of how your Student Management System form should look:</p>

          <p><strong>Example – Clean layout with sample data</strong></p>
          <img 
            src={useBaseUrl('/img/session11/form2.jpg')} 
            alt="Student Management System Windows Form Example 2" 
            style={{maxWidth: '100%', border: '1px solid #ddd', borderRadius: '6px', margin: '12px 0'}}
          />
            
          <h3>Recommended Form Layout</h3>

          <ul>
            <li><strong>Top / Left side</strong> — Input area (Labels + TextBoxes for Id, Name, Age, Course)</li>
            <li><strong>Middle</strong> — Action buttons (Insert, Update, Delete, Clear, Refresh)</li>
            <li><strong>Bottom</strong> — DataGridView that shows all student records</li>
          </ul>

          <p><strong>Suggested control names:</strong></p>
          <ul>
            <li>TextBoxes: <code>txtId</code>, <code>txtName</code>, <code>txtAge</code>, <code>txtCourse</code></li>
            <li>Buttons: <code>btnInsert</code>, <code>btnUpdate</code>, <code>btnDelete</code>, <code>btnClear</code>, <code>btnRefresh</code></li>
            <li>DataGridView: <code>dgvStudents</code></li>
          </ul>

          <h3>Required Database Table</h3>

          <CodeBlock
            language="sql"
            code={`CREATE TABLE Students
(
    Id      INT PRIMARY KEY IDENTITY(1,1),
    Name    NVARCHAR(100) NOT NULL,
    Age     INT,
    Course  NVARCHAR(100)
)`}
            caption="SQL to create the Students table"
          />

          <h3>Connection String (place at class level)</h3>

          <CodeBlock
            language="csharp"
            code={`string connectionString = @"Data Source=.;Initial Catalog=StudentDB;Integrated Security=True";`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Complete Code Overview</h3>

          <p>Below is a complete, working overview of the main methods you need.</p>

          <CodeBlock
            language="csharp"
            code={`// 1. Load data into DataGridView
private void LoadData()
{
    try
    {
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            string query = "SELECT Id, Name, Age, Course FROM Students";
            SqlDataAdapter da = new SqlDataAdapter(query, con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            dgvStudents.DataSource = dt;
        }
    }
    catch (Exception ex)
    {
        MessageBox.Show("Error loading data: " + ex.Message);
    }
}

// 2. Form Load – load data when the form opens
private void Form1_Load(object sender, EventArgs e)
{
    LoadData();
}

// 3. Insert new student
private void btnInsert_Click(object sender, EventArgs e)
{
    if (string.IsNullOrWhiteSpace(txtName.Text))
    {
        MessageBox.Show("Please enter student name.", "Validation",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
        return;
    }

    try
    {
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            string query = "INSERT INTO Students (Name, Age, Course) VALUES (@Name, @Age, @Course)";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@Name", txtName.Text.Trim());
            cmd.Parameters.AddWithValue("@Age", Convert.ToInt32(txtAge.Text));
            cmd.Parameters.AddWithValue("@Course", txtCourse.Text.Trim());

            con.Open();
            cmd.ExecuteNonQuery();
            MessageBox.Show("Student added successfully!", "Success",
                            MessageBoxButtons.OK, MessageBoxIcon.Information);
            ClearFields();
            LoadData();
        }
    }
    catch (Exception ex)
    {
        MessageBox.Show("Error: " + ex.Message);
    }
}

// 4. Update existing student
private void btnUpdate_Click(object sender, EventArgs e)
{
    if (string.IsNullOrWhiteSpace(txtId.Text))
    {
        MessageBox.Show("Please select a student or enter Id to update.", "Validation",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
        return;
    }

    try
    {
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            string query = "UPDATE Students SET Name=@Name, Age=@Age, Course=@Course WHERE Id=@Id";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@Name", txtName.Text.Trim());
            cmd.Parameters.AddWithValue("@Age", Convert.ToInt32(txtAge.Text));
            cmd.Parameters.AddWithValue("@Course", txtCourse.Text.Trim());
            cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

            con.Open();
            int rows = cmd.ExecuteNonQuery();
            if (rows > 0)
            {
                MessageBox.Show("Record updated successfully!");
                ClearFields();
                LoadData();
            }
            else
            {
                MessageBox.Show("No record found with the given Id.");
            }
        }
    }
    catch (Exception ex)
    {
        MessageBox.Show("Error: " + ex.Message);
    }
}

// 5. Delete student
private void btnDelete_Click(object sender, EventArgs e)
{
    if (string.IsNullOrWhiteSpace(txtId.Text))
    {
        MessageBox.Show("Please enter/select the Id of the student to delete.");
        return;
    }

    DialogResult result = MessageBox.Show(
        "Are you sure you want to delete this student?",
        "Confirm Delete",
        MessageBoxButtons.YesNo,
        MessageBoxIcon.Question);

    if (result != DialogResult.Yes) return;

    try
    {
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            string query = "DELETE FROM Students WHERE Id=@Id";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@Id", Convert.ToInt32(txtId.Text));

            con.Open();
            cmd.ExecuteNonQuery();
            MessageBox.Show("Record deleted successfully!");
            ClearFields();
            LoadData();
        }
    }
    catch (Exception ex)
    {
        MessageBox.Show("Error: " + ex.Message);
    }
}

// 6. Clear all text boxes
private void btnClear_Click(object sender, EventArgs e)
{
    ClearFields();
}

private void ClearFields()
{
    txtId.Clear();
    txtName.Clear();
    txtAge.Clear();
    txtCourse.Clear();
    txtName.Focus();
}

// 7. Refresh button
private void btnRefresh_Click(object sender, EventArgs e)
{
    LoadData();
}

// 8. Optional: Click on a row in the grid to load data into textboxes
private void dgvStudents_CellClick(object sender, DataGridViewCellEventArgs e)
{
    if (e.RowIndex >= 0)
    {
        DataGridViewRow row = dgvStudents.Rows[e.RowIndex];
        txtId.Text = row.Cells["Id"].Value.ToString();
        txtName.Text = row.Cells["Name"].Value.ToString();
        txtAge.Text = row.Cells["Age"].Value.ToString();
        txtCourse.Text = row.Cells["Course"].Value.ToString();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Tips for Students</h3>
          <ul>
            <li>Set the form’s <code>Text</code> property to “Student Management System”.</li>
            <li>Make the DataGridView dock to the bottom or fill the remaining space.</li>
            <li>Use the <code>CellClick</code> event of the grid so that clicking a row fills the text boxes (very useful for Update/Delete).</li>
            <li>Always use parameterized queries (as shown above) to avoid SQL injection.</li>
            <li>Add simple validation (empty name, non-numeric age, etc.) before calling the database.</li>
          </ul>

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
