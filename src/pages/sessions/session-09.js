import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session09() {
  const codeBlockStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '12px 16px',
    borderRadius: '6px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    margin: '12px 0 24px 0'
  };

  const inlineCodeStyle = {
    backgroundColor: '#f4f4f4',
    color: '#d10057',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '0.9em'
  };
  return (
    <Layout
      title="Session 09 — Events, Delegates, and Collections"
      description="Delegates, Events and Collections in C#"
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
          <h1>Session 09 — Events, Delegates, and Collections</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand Delegates, Events and work with different types of Collections.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 9</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and use Delegates</li>
            <li>Create and raise Events</li>
            <li>Understand the relationship between Delegates and Events</li>
            <li>Work with non-generic collections (ArrayList, Hashtable)</li>
            <li>Work with generic collections (List, Dictionary, Queue, Stack)</li>
            <li>Choose the right collection for a given problem</li>
          </ul>

          <hr />

          <h2>1. Delegates</h2>
          <p>A delegate is a type that represents references to methods. It allows methods to be passed as parameters.</p>

          <h3>1.1 Declaring and Using a Delegate</h3>
          <pre style={codeBlockStyle}>
            <code>{`// Declare delegate
public delegate void GreetingDelegate(string name);

// Methods that match the delegate signature
public void SayHello(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

public void SayGoodbye(string name)
{
    Console.WriteLine($"Goodbye, {name}!");
}

// Usage
GreetingDelegate greet = SayHello;
greet("Ali");                  // Hello, Ali!

greet = SayGoodbye;
greet("Ali");                  // Goodbye, Ali!`}</code>
          </pre>

          <h3>1.2 Multicast Delegates</h3>
          <pre style={codeBlockStyle}>
            <code>{`GreetingDelegate greet = SayHello;
greet += SayGoodbye;           // Add another method

greet("Sara");
// Output:
// Hello, Sara!
// Goodbye, Sara!`}</code>
          </pre>

          <h3>1.3 Delegates with Return Type</h3>
          <pre style={codeBlockStyle}>
            <code>{`public delegate int CalculateDelegate(int a, int b);

public int Add(int a, int b) => a + b;
public int Multiply(int a, int b) => a * b;

CalculateDelegate calc = Add;
Console.WriteLine(calc(10, 5));     // 15

calc = Multiply;
Console.WriteLine(calc(10, 5));     // 50`}</code>
          </pre>

          <hr />

          <h2>2. Events</h2>
          <p>Events are a way for a class to notify other classes when something happens. Events are based on delegates.</p>

          <pre style={codeBlockStyle}>
            <code>{`public class Button
{
    // Declare event
    public event Action OnClick;

    public void Click()
    {
        Console.WriteLine("Button clicked!");
        OnClick?.Invoke();          // Raise the event
    }
}

// Usage
Button btn = new Button();

// Subscribe to the event
btn.OnClick += () => Console.WriteLine("Event handler 1 executed");
btn.OnClick += () => Console.WriteLine("Event handler 2 executed");

btn.Click();
// Output:
// Button clicked!
// Event handler 1 executed
// Event handler 2 executed`}</code>
          </pre>

          <h3>Real-world style Example</h3>
          <pre style={codeBlockStyle}>
            <code>{`public class TemperatureSensor
{
    public event Action<double> TemperatureChanged;

    private double temperature;

    public double Temperature
    {
        get { return temperature; }
        set
        {
            temperature = value;
            TemperatureChanged?.Invoke(temperature);
        }
    }
}

// Usage
TemperatureSensor sensor = new TemperatureSensor();

sensor.TemperatureChanged += (temp) =>
{
    Console.WriteLine($"Temperature updated: {temp}°C");
    if (temp > 30)
        Console.WriteLine("Warning: High temperature!");
};

sensor.Temperature = 25;
sensor.Temperature = 35;`}</code>
          </pre>

          <hr />

          <h2>3. Collections</h2>

          <h3>3.1 Non-Generic Collections (System.Collections)</h3>

          <h4>ArrayList</h4>
          <pre style={codeBlockStyle}>
            <code>{`using System.Collections;

ArrayList list = new ArrayList();
list.Add("Ali");
list.Add(25);
list.Add(true);
list.Add(45.6);

foreach (var item in list)
{
    Console.WriteLine(item);
}`}</code>
          </pre>

          <h4>Hashtable</h4>
          <pre style={codeBlockStyle}>
            <code>{`Hashtable ht = new Hashtable();
ht.Add(1, "Ali");
ht.Add(2, "Sara");
ht.Add(3, "Ahmed");

Console.WriteLine(ht[2]);     // Sara`}</code>
          </pre>

          <h3>3.2 Generic Collections (Recommended)</h3>

          <h4>List&lt;T&gt;</h4>
          <pre style={codeBlockStyle}>
            <code>{`List<string> names = new List<string>();
names.Add("Ali");
names.Add("Sara");
names.Add("Ahmed");

names.Insert(1, "Fatima");
names.Remove("Sara");

foreach (string name in names)
{
    Console.WriteLine(name);
}

Console.WriteLine($"Total students: {names.Count}");`}</code>
          </pre>

          <h4>Dictionary&lt;TKey, TValue&gt;</h4>
          <pre style={codeBlockStyle}>
            <code>{`Dictionary<int, string> students = new Dictionary<int, string>();
students.Add(101, "Ali");
students.Add(102, "Sara");
students.Add(103, "Ahmed");

Console.WriteLine(students[102]);     // Sara

foreach (var item in students)
{
    Console.WriteLine($"Roll No: {item.Key}, Name: {item.Value}");
}`}</code>
          </pre>

          <h4>Queue&lt;T&gt; (FIFO)</h4>
          <pre style={codeBlockStyle}>
            <code>{`Queue<string> queue = new Queue<string>();
queue.Enqueue("Ali");
queue.Enqueue("Sara");
queue.Enqueue("Ahmed");

Console.WriteLine(queue.Dequeue());   // Ali
Console.WriteLine(queue.Peek());      // Sara`}</code>
          </pre>

          <h4>Stack&lt;T&gt; (LIFO)</h4>
          <pre style={codeBlockStyle}>
            <code>{`Stack<string> stack = new Stack<string>();
stack.Push("Ali");
stack.Push("Sara");
stack.Push("Ahmed");

Console.WriteLine(stack.Pop());       // Ahmed
Console.WriteLine(stack.Peek());      // Sara`}</code>
          </pre>

          <hr />

          <h2>4. Complete Live Example</h2>

          <pre style={codeBlockStyle}>
            <code>{`public class Student
{
    public int RollNo { get; set; }
    public string Name { get; set; }

    public Student(int rollNo, string name)
    {
        RollNo = rollNo;
        Name = name;
    }
}

public class StudentManager
{
    private List<Student> students = new List<Student>();

    public event Action<string> StudentAdded;

    public void AddStudent(Student student)
    {
        students.Add(student);
        StudentAdded?.Invoke($"{student.Name} has been added successfully.");
    }

    public void DisplayAll()
    {
        Console.WriteLine("\n----- Student List -----");
        foreach (var s in students)
        {
            Console.WriteLine($"Roll No: {s.RollNo}, Name: {s.Name}");
        }
    }
}

// Testing
StudentManager manager = new StudentManager();

manager.StudentAdded += (message) => Console.WriteLine(message);

manager.AddStudent(new Student(101, "Ali"));
manager.AddStudent(new Student(102, "Sara"));
manager.AddStudent(new Student(103, "Ahmed"));

manager.DisplayAll();`}</code>
          </pre>

          <hr />

          <h2>5. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a delegate that takes two integers and returns their sum, difference, and product using different methods.</p>

          <h3>Exercise 2</h3>
          <p>Create a class <code>BankAccount</code> that raises an event when the balance falls below 1000.</p>

          <h3>Exercise 3</h3>
          <p>Create a program that stores 5 student names in a <code>List&lt;string&gt;</code> and then searches for a name entered by the user.</p>

          <h3>Exercise 4</h3>
          <p>Use a <code>Dictionary</code> to store product names and their prices. Allow the user to search for a product and display its price.</p>

          <hr />

          <h2>6. Session Challenge</h2>
          <p>Build a simple <strong>Notification System</strong>:</p>
          <ul>
            <li>Create a class <code>NotificationService</code></li>
            <li>It should have an event <code>OnNotificationSent</code></li>
            <li>Create methods to send Email, SMS and Push notifications</li>
            <li>Subscribe to the event and display a confirmation message every time a notification is sent</li>
            <li>Store all sent notifications in a <code>List&lt;string&gt;</code></li>
          </ul>

          <hr />

          <h2>7. Session Quiz</h2>
          <ol>
            <li>What is a delegate?</li>
            <li>What is a multicast delegate?</li>
            <li>What is an event?</li>
            <li>What is the relationship between delegates and events?</li>
            <li>What is the difference between <code>ArrayList</code> and <code>List&lt;T&gt;</code>?</li>
            <li>What is the difference between <code>Queue</code> and <code>Stack</code>?</li>
            <li>Which collection is best for key-value pairs?</li>
            <li>Why are generic collections preferred over non-generic collections?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Generics and Iterators</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
