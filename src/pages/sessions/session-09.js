import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session09() {
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

          <p>
            This session connects three related ideas. Delegates are type-safe
            method references. Events build on delegates to implement the
            publisher/subscriber pattern. Collections store groups of objects;
            modern C# prefers generic collections for type safety and performance.
          </p>

          <hr />

          <h2>1. Delegates</h2>
          <p>A delegate is a type that represents references to methods. It allows methods to be passed as parameters.</p>

          <p>
            Think of a delegate as a strongly typed function pointer. Once you
            declare a delegate type, any method (or lambda) with a matching
            signature can be assigned to a variable of that type and invoked
            later. This enables callbacks, plugins, and event handling without
            hard-coding which method will run.
          </p>

          <p>
            The signature of the delegate (return type and parameters) must
            match the methods you assign to it. Built-in generic delegates such
            as <code>Action</code>, <code>Action<T></code>, and
            <code>Func<T, TResult></code> cover many common cases so you
            often do not need a custom delegate type.
          </p>

          <h3>1.1 Declaring and Using a Delegate</h3>
          <CodeBlock
          language="csharp"
            code={`// Declare delegate
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
greet("Ali");                  // Goodbye, Ali!`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            <code>GreetingDelegate greet = SayHello;</code> stores a reference
            to the method. Calling <code>greet("Ali")</code> invokes that
            method. Reassigning <code>greet = SayGoodbye</code> switches which
            method runs without changing the call site. That is the core idea
            of indirection through delegates.
          </p>

          <h3>1.2 Multicast Delegates</h3>
          <CodeBlock
          language="csharp"
            code={`GreetingDelegate greet = SayHello;
greet += SayGoodbye;           // Add another method

greet("Sara");
// Output:
// Hello, Sara!
// Goodbye, Sara!`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            The <code>+=</code> operator adds a method to the invocation list.
            When the delegate is invoked, every method in the list runs in the
            order they were added. Use <code>-=</code> to remove a handler.
            Multicast delegates are the foundation of the event model.
          </p>

          <p>
            If a multicast delegate has a non-void return type, only the return
            value of the <em>last</em> method in the list is returned to the
            caller. For that reason, event-style multicast handlers are usually
            void (or use <code>Action</code>).
          </p>

          <h3>1.3 Delegates with Return Type</h3>
          <CodeBlock
          language="csharp"
            code={`public delegate int CalculateDelegate(int a, int b);

public int Add(int a, int b) => a + b;
public int Multiply(int a, int b) => a * b;

CalculateDelegate calc = Add;
Console.WriteLine(calc(10, 5));     // 15

calc = Multiply;
Console.WriteLine(calc(10, 5));     // 50`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            You can achieve the same thing with the built-in
            <code>Func<int, int, int></code> without declaring a custom
            delegate type:
          </p>
          <CodeBlock
          language="csharp"
            code={`Func<int, int, int> calc = Add;
Console.WriteLine(calc(10, 5));   // 15

calc = Multiply;
Console.WriteLine(calc(10, 5));   // 50

// Action is for void methods
Action<string> printer = Console.WriteLine;
printer("Hello from Action");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>2. Events</h2>
          <p>Events are a way for a class to notify other classes when something happens. Events are based on delegates.</p>

          <p>
            The <code>event</code> keyword wraps a delegate and restricts how
            outside code can use it: subscribers may only use <code>+=</code>
            and <code>-=</code>. Only the declaring class can raise (invoke)
            the event. That encapsulation is the main difference between a
            public delegate field and a proper event.
          </p>

          <p>
            <code>OnClick?.Invoke()</code> is the null-conditional invoke
            pattern. If no handlers are subscribed, the event is null and
            Invoke is skipped safely. Always use this form (or an equivalent
            null check) when raising events.
          </p>

          <CodeBlock
          language="csharp"
            code={`public class Button
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
// Event handler 2 executed`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h3>Real-world style Example</h3>
          <CodeBlock
          language="csharp"
            code={`public class TemperatureSensor
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
sensor.Temperature = 35;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Raising the event from the property setter is a common pattern:
            any code that assigns <code>Temperature</code> automatically
            notifies subscribers. Multiple handlers can subscribe; each one
            receives the new temperature value through the
            <code>Action<double></code> parameter.
          </p>

          <p>
            To unsubscribe, store the handler in a variable and use
            <code>-=</code>:
          </p>
          <CodeBlock
          language="csharp"
            code={`Action<double> handler = (temp) => Console.WriteLine($"Temp: {temp}");
sensor.TemperatureChanged += handler;
// ... later
sensor.TemperatureChanged -= handler;`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <hr />

          <h2>3. Collections</h2>

          <p>
            Collections hold multiple objects. Non-generic collections (in
            <code>System.Collections</code>) store <code>object</code> and
            require casting. Generic collections (in
            <code>System.Collections.Generic</code>) are type-safe, avoid
            boxing for value types, and are preferred in modern C#.
          </p>

          <h3>3.1 Non-Generic Collections (System.Collections)</h3>

          <h4>ArrayList</h4>
          <CodeBlock
          language="csharp"
            code={`using System.Collections;

ArrayList list = new ArrayList();
list.Add("Ali");
list.Add(25);
list.Add(true);
list.Add(45.6);

foreach (var item in list)
{
    Console.WriteLine(item);
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            ArrayList can hold mixed types because everything is stored as
            <code>object</code>. That flexibility costs type safety: you must
            cast when reading, and value types are boxed. Prefer
            <code>List<T></code> in new code.
          </p>

          <h4>Hashtable</h4>
          <CodeBlock
          language="csharp"
            code={`Hashtable ht = new Hashtable();
ht.Add(1, "Ali");
ht.Add(2, "Sara");
ht.Add(3, "Ahmed");

Console.WriteLine(ht[2]);     // Sara`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Hashtable maps keys to values using hashing for fast lookup. Keys
            and values are both <code>object</code>. The modern replacement is
            <code>Dictionary<TKey, TValue></code>.
          </p>

          <h3>3.2 Generic Collections (Recommended)</h3>

          <h4>List<T></h4>
          <CodeBlock
          language="csharp"
            code={`List<string> names = new List<string>();
names.Add("Ali");
names.Add("Sara");
names.Add("Ahmed");

names.Insert(1, "Fatima");
names.Remove("Sara");

foreach (string name in names)
{
    Console.WriteLine(name);
}

Console.WriteLine($"Total students: {names.Count}");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            <code>List<T></code> is a dynamic array. Common members:
            <code>Add</code>, <code>Insert</code>, <code>Remove</code>,
            <code>RemoveAt</code>, <code>Contains</code>, <code>IndexOf</code>,
            <code>Count</code>, <code>Clear</code>, and indexer
            <code>list[i]</code>. It grows automatically as you add items.
          </p>

          <CodeBlock
          language="csharp"
            code={`// Initialization shortcuts
List<int> scores = new List<int> { 90, 85, 78 };
List<string> cities = new() { "Karachi", "Lahore", "Islamabad" };

if (names.Contains("Ali"))
    Console.WriteLine("Found Ali");

int index = names.IndexOf("Ahmed");
Console.WriteLine($"Ahmed is at index {index}");`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h4>Dictionary<TKey, TValue></h4>
          <CodeBlock
          language="csharp"
            code={`Dictionary<int, string> students = new Dictionary<int, string>();
students.Add(101, "Ali");
students.Add(102, "Sara");
students.Add(103, "Ahmed");

Console.WriteLine(students[102]);     // Sara

foreach (var item in students)
{
    Console.WriteLine($"Roll No: {item.Key}, Name: {item.Value}");
}`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Keys must be unique. Use <code>TryGetValue</code> to avoid
            exceptions when a key might be missing, and
            <code>ContainsKey</code> to test existence.
          </p>
          <CodeBlock
          language="csharp"
            code={`if (students.TryGetValue(102, out string name))
    Console.WriteLine($"Found: {name}");
else
    Console.WriteLine("Not found");

students[104] = "Fatima";   // Add or update via indexer
students.Remove(101);`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <h4>Queue<T> (FIFO)</h4>
          <CodeBlock
          language="csharp"
            code={`Queue<string> queue = new Queue<string>();
queue.Enqueue("Ali");
queue.Enqueue("Sara");
queue.Enqueue("Ahmed");

Console.WriteLine(queue.Dequeue());   // Ali
Console.WriteLine(queue.Peek());      // Sara`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            First-In, First-Out. <code>Enqueue</code> adds to the back,
            <code>Dequeue</code> removes from the front, <code>Peek</code>
            looks at the front without removing. Useful for print queues, task
            pipelines, and breadth-first algorithms.
          </p>

          <h4>Stack<T> (LIFO)</h4>
          <CodeBlock
          language="csharp"
            code={`Stack<string> stack = new Stack<string>();
stack.Push("Ali");
stack.Push("Sara");
stack.Push("Ahmed");

Console.WriteLine(stack.Pop());       // Ahmed
Console.WriteLine(stack.Peek());      // Sara`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Last-In, First-Out. <code>Push</code> adds on top, <code>Pop</code>
            removes from the top, <code>Peek</code> inspects the top. Useful for
            undo stacks, expression evaluation, and depth-first traversal.
          </p>

          <h3>Quick comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Collection</th>
                <th>Order</th>
                <th>Typical use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>List<T></code></td>
                <td>Indexed sequence</td>
                <td>General-purpose list of items</td>
              </tr>
              <tr>
                <td><code>Dictionary<TKey,TValue></code></td>
                <td>Key → value</td>
                <td>Fast lookup by key</td>
              </tr>
              <tr>
                <td><code>Queue<T></code></td>
                <td>FIFO</td>
                <td>Processing in arrival order</td>
              </tr>
              <tr>
                <td><code>Stack<T></code></td>
                <td>LIFO</td>
                <td>Undo, nested structures</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Complete Live Example</h2>

          <p>
            This example combines a generic list with an event: every time a
            student is added, subscribers are notified. It shows how delegates,
            events, and collections work together in a small real design.
          </p>

          <CodeBlock
          language="csharp"
            code={`public class Student
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
        Console.WriteLine("\\n----- Student List -----");
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

manager.DisplayAll();`}
          caption="Interactive preview: switch between themes to see the same C# snippet restyled."/>

          <p>
            Try adding a second handler (for example, one that writes to a log
            file or increments a counter) to see multicast behavior in action.
          </p>

          <hr />

          <h2>5. Practice Exercises</h2>

          <p>
            Complete each exercise in a console project. Prefer generic
            collections and use <code>?.Invoke()</code> when raising events.
          </p>

          <h3>Exercise 1</h3>
          <p>Create a delegate that takes two integers and returns their sum, difference, and product using different methods.</p>

          <h3>Exercise 2</h3>
          <p>Create a class <code>BankAccount</code> that raises an event when the balance falls below 1000.</p>

          <h3>Exercise 3</h3>
          <p>Create a program that stores 5 student names in a <code>List<string></code> and then searches for a name entered by the user.</p>

          <h3>Exercise 4</h3>
          <p>Use a <code>Dictionary</code> to store product names and their prices. Allow the user to search for a product and display its price.</p>

          <hr />

          <h2>6. Session Challenge</h2>
          <p>Build a simple <strong>Notification System</strong>:</p>

          <p>
            Design the service so that sending a notification both raises the
            event and stores a history entry. That ties together events and
            <code>List<string></code> in one small application.
          </p>

          <ul>
            <li>Create a class <code>NotificationService</code></li>
            <li>It should have an event <code>OnNotificationSent</code></li>
            <li>Create methods to send Email, SMS and Push notifications</li>
            <li>Subscribe to the event and display a confirmation message every time a notification is sent</li>
            <li>Store all sent notifications in a <code>List<string></code></li>
          </ul>

          <hr />

          <h2>7. Session Quiz</h2>

          <p>
            Be ready to explain multicast behavior, why events restrict
            invocation, and when to choose List vs Dictionary vs Queue vs Stack.
          </p>

          <ol>
            <li>What is a delegate?</li>
            <li>What is a multicast delegate?</li>
            <li>What is an event?</li>
            <li>What is the relationship between delegates and events?</li>
            <li>What is the difference between <code>ArrayList</code> and <code>List<T></code>?</li>
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
