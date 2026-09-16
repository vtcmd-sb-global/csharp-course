import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session10() {
  return (
    <Layout
      title="Session 10 — Generics and Iterators"
      description="Generics and Iterators in C#"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 10 — Generics and Iterators</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn Generics for type-safe reusable code and Iterators for custom looping logic.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 10</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Define and explain Generics</li>
            <li>Create generic classes and methods</li>
            <li>Use generic constraints</li>
            <li>Understand the benefits of Generics</li>
            <li>Create and use Iterators with <code>yield return</code></li>
            <li>Build custom collections using iterators</li>
          </ul>

          <hr />

          <h2>1. What are Generics?</h2>
          <p>Generics allow you to design classes, methods, and interfaces that work with any data type while maintaining type safety.</p>

          <pre>
            <code>{`// Without Generics (not type-safe)
ArrayList list = new ArrayList();
list.Add(10);
list.Add("Ali");          // No error at compile time
int number = (int)list[0];

// With Generics (type-safe)
List<int> numbers = new List<int>();
numbers.Add(10);
// numbers.Add("Ali");    // Compile-time error`}</code>
          </pre>

          <h3>Benefits of Generics</h3>
          <ul>
            <li>Type safety</li>
            <li>Better performance (no boxing/unboxing)</li>
            <li>Code reusability</li>
            <li>Cleaner code</li>
          </ul>

          <hr />

          <h2>2. Generic Methods</h2>

          <pre>
            <code>{`public class Utility
{
    // Generic method
    public static void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }

    public static void Display<T>(T value)
    {
        Console.WriteLine($"Value: {value}");
    }
}

// Usage
int x = 10, y = 20;
Utility.Swap(ref x, ref y);
Console.WriteLine($"x = {x}, y = {y}");     // x = 20, y = 10

string s1 = "Hello", s2 = "World";
Utility.Swap(ref s1, ref s2);
Console.WriteLine($"s1 = {s1}, s2 = {s2}");`}</code>
          </pre>

          <hr />

          <h2>3. Generic Classes</h2>

          <pre>
            <code>{`public class Repository<T>
{
    private List<T> items = new List<T>();

    public void Add(T item)
    {
        items.Add(item);
    }

    public T Get(int index)
    {
        return items[index];
    }

    public int Count => items.Count;

    public void DisplayAll()
    {
        foreach (T item in items)
        {
            Console.WriteLine(item);
        }
    }
}

// Usage
Repository<string> names = new Repository<string>();
names.Add("Ali");
names.Add("Sara");
names.Add("Ahmed");
names.DisplayAll();

Repository<int> numbers = new Repository<int>();
numbers.Add(10);
numbers.Add(20);
numbers.Add(30);
numbers.DisplayAll();`}</code>
          </pre>

          <hr />

          <h2>4. Generic Constraints</h2>
          <p>Constraints restrict the types that can be used with a generic class or method.</p>

          <pre>
            <code>{`// T must be a class (reference type)
public class DataStore<T> where T : class
{
    public T Data { get; set; }
}

// T must have a parameterless constructor
public class Factory<T> where T : new()
{
    public T Create()
    {
        return new T();
    }
}

// T must implement an interface
public class Processor<T> where T : IComparable<T>
{
    public T FindMax(T a, T b)
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}`}</code>
          </pre>

          <h3>Common Constraints</h3>
          <table>
            <thead>
              <tr>
                <th>Constraint</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>where T : class</code></td>
                <td>T must be a reference type</td>
              </tr>
              <tr>
                <td><code>where T : struct</code></td>
                <td>T must be a value type</td>
              </tr>
              <tr>
                <td><code>where T : new()</code></td>
                <td>T must have a parameterless constructor</td>
              </tr>
              <tr>
                <td><code>where T : BaseClass</code></td>
                <td>T must inherit from BaseClass</td>
              </tr>
              <tr>
                <td><code>where T : IInterface</code></td>
                <td>T must implement the interface</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Iterators</h2>
          <p>Iterators allow you to create custom looping logic using the <code>yield return</code> statement.</p>

          <h3>5.1 Simple Iterator</h3>
          <pre>
            <code>{`public static IEnumerable<int> GetNumbers()
{
    yield return 1;
    yield return 2;
    yield return 3;
    yield return 4;
    yield return 5;
}

// Usage
foreach (int number in GetNumbers())
{
    Console.WriteLine(number);
}`}</code>
          </pre>

          <h3>5.2 Iterator with Logic</h3>
          <pre>
            <code>{`public static IEnumerable<int> GetEvenNumbers(int max)
{
    for (int i = 1; i <= max; i++)
    {
        if (i % 2 == 0)
            yield return i;
    }
}

// Usage
foreach (int num in GetEvenNumbers(10))
{
    Console.Write(num + " ");   // 2 4 6 8 10
}`}</code>
          </pre>

          <h3>5.3 Custom Collection with Iterator</h3>
          <pre>
            <code>{`public class StudentCollection
{
    private List<string> students = new List<string>();

    public void Add(string name)
    {
        students.Add(name);
    }

    public IEnumerable<string> GetStudents()
    {
        foreach (string student in students)
        {
            yield return student;
        }
    }

    public IEnumerable<string> GetStudentsStartingWith(char letter)
    {
        foreach (string student in students)
        {
            if (student.StartsWith(letter.ToString(), StringComparison.OrdinalIgnoreCase))
                yield return student;
        }
    }
}

// Usage
StudentCollection collection = new StudentCollection();
collection.Add("Ali");
collection.Add("Ahmed");
collection.Add("Sara");
collection.Add("Sana");
collection.Add("Usman");

Console.WriteLine("All Students:");
foreach (string name in collection.GetStudents())
{
    Console.WriteLine(name);
}

Console.WriteLine("\nStudents starting with 'A':");
foreach (string name in collection.GetStudentsStartingWith('A'))
{
    Console.WriteLine(name);
}`}</code>
          </pre>

          <hr />

          <h2>6. Complete Live Example</h2>

          <pre>
            <code>{`public class GenericStack<T>
{
    private List<T> items = new List<T>();

    public void Push(T item)
    {
        items.Add(item);
    }

    public T Pop()
    {
        if (items.Count == 0)
            throw new InvalidOperationException("Stack is empty");

        T item = items[items.Count - 1];
        items.RemoveAt(items.Count - 1);
        return item;
    }

    public T Peek()
    {
        if (items.Count == 0)
            throw new InvalidOperationException("Stack is empty");

        return items[items.Count - 1];
    }

    public int Count => items.Count;

    public IEnumerable<T> GetAll()
    {
        for (int i = items.Count - 1; i >= 0; i--)
        {
            yield return items[i];
        }
    }
}

// Testing
GenericStack<string> stack = new GenericStack<string>();
stack.Push("Ali");
stack.Push("Sara");
stack.Push("Ahmed");

Console.WriteLine($"Top item: {stack.Peek()}");
Console.WriteLine($"Popped: {stack.Pop()}");

Console.WriteLine("\nRemaining items:");
foreach (string item in stack.GetAll())
{
    Console.WriteLine(item);
}`}</code>
          </pre>

          <hr />

          <h2>7. Practice Exercises</h2>

          <h3>Exercise 1</h3>
          <p>Create a generic method that finds the maximum of three values of any type that implements <code>IComparable&lt;T&gt;</code>.</p>

          <h3>Exercise 2</h3>
          <p>Create a generic class <code>Pair&lt;T1, T2&gt;</code> that stores two values of different types and displays them.</p>

          <h3>Exercise 3</h3>
          <p>Write an iterator method that returns all odd numbers between 1 and a given number.</p>

          <h3>Exercise 4</h3>
          <p>Create a generic repository class that supports Add, Remove, and GetAll operations.</p>

          <hr />

          <h2>8. Session Challenge</h2>
          <p>Build a simple generic <strong>Library System</strong>:</p>
          <ul>
            <li>Create a generic class <code>Library&lt;T&gt;</code> where T represents a book or any item</li>
            <li>Methods: AddItem, RemoveItem, GetAllItems</li>
            <li>Use an iterator to return items that match a search keyword</li>
            <li>Test it with both books (string) and custom Book objects</li>
          </ul>

          <hr />

          <h2>9. Session Quiz</h2>
          <ol>
            <li>What are Generics?</li>
            <li>What is the main benefit of using Generics?</li>
            <li>What is a generic method?</li>
            <li>What is a generic class?</li>
            <li>What is a generic constraint?</li>
            <li>What does <code>where T : class</code> mean?</li>
            <li>What is an iterator?</li>
            <li>What does the <code>yield return</code> statement do?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> GUI and Connectivity with SQL Database</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
