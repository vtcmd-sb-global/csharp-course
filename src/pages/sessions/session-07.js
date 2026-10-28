import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session07() {
  return (
    <Layout
      title="Session 07 — Properties, Indexers, and Record Types"
      description="Properties, Indexers, init-only setters and Record Types in C#"
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
          <h1>Session 07 — Properties, Indexers, and Record Types</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Master Properties, Indexers and modern Record Types for clean and safe data handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 7</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain why properties are preferred over public fields</li>
            <li>Create full properties, auto-implemented properties, and properties with validation</li>
            <li>Create read-only and expression-bodied properties</li>
            <li>Write and use Indexers so objects can be accessed like arrays</li>
            <li>Use init-only setters for safer object initialization</li>
            <li>Create and work with Record Types, including the <code>with</code> expression</li>
          </ul>

          <hr />

          <h2>1. Properties in C#</h2>

          <p>
            In earlier sessions you may have used public fields like this:
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    public string Name;   // public field – not recommended
}`}
            caption="Public field (old style – avoid this)"
          />

          <p>
            Public fields are simple, but they give the outside world complete control over your data.
            There is no way to validate values, log changes, or protect the data later.
          </p>

          <p>
            A <strong>property</strong> is a better way to expose data.  
            It looks like a field from the outside, but behind the scenes it can contain logic (validation, calculation, logging, etc.).
          </p>

          <h3>1.1 Full Property (with backing field)</h3>
          <p>
            This is the classic form of a property. It uses a private field (called the backing field) to store the actual data.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    private string name;          // backing field (private)

    public string Name            // Property (public)
    {
        get { return name; }      // called when you read the property
        set { name = value; }     // called when you assign a value
    }
}`}
            caption="Full property with explicit get and set"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The private field <code>name</code> holds the real data. Outside code cannot touch it directly.</li>
            <li>The public property <code>Name</code> is the only way the outside world can read or write the value.</li>
            <li><code>get</code> runs whenever someone reads <code>student.Name</code>.</li>
            <li><code>set</code> runs whenever someone writes <code>student.Name = "Ali"</code>. The special keyword <code>value</code> holds the value being assigned.</li>
          </ul>

          <h3>1.2 Auto-Implemented Property (Most Common)</h3>
          <p>
            In most cases you do not need custom logic. C# lets you write a short version and the compiler creates the backing field for you.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Course { get; set; }
}`}
            caption="Auto-implemented properties – clean and modern"
          />

          <p>
            This is the style you will use most of the time.  
            Only switch to a full property when you need validation or extra logic.
          </p>

          <h3>1.3 Property with Validation</h3>
          <p>
            One of the biggest advantages of properties is that you can add validation inside the setter.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 15 || value > 60)
                throw new ArgumentException("Age must be between 15 and 60");
            age = value;
        }
    }
}`}
            caption="Property that protects itself with validation"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The getter simply returns the private field.</li>
            <li>The setter first checks whether the new value is acceptable.</li>
            <li>If the value is invalid, it throws an exception instead of silently accepting bad data.</li>
            <li>Only after the check passes is the private field updated.</li>
          </ul>

          <p>
            <strong>Common beginner mistake:</strong> Putting validation in the constructor only.  
            If the property is public, someone can still change it later. Validation belongs in the property setter.
          </p>

          <h3>1.4 Read-only Property</h3>
          <p>
            Sometimes a value should be set only once (usually in the constructor) and never changed afterwards.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    public string Name { get; }           // no set – read-only after construction

    public Student(string name)
    {
        Name = name;                      // allowed only inside the constructor
    }
}`}
            caption="Read-only property"
          />

          <h3>1.5 Expression-bodied Property</h3>
          <p>
            When a property only calculates a value and does not store anything, you can write it in a very short form.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Rectangle
{
    public double Length { get; set; }
    public double Width { get; set; }

    public double Area => Length * Width;
    public double Perimeter => 2 * (Length + Width);
}`}
            caption="Expression-bodied properties for calculated values"
          />

          <p>
            The <code>=></code> syntax means “this property always returns the result of this expression”.  
            There is no backing field and no setter.
          </p>

          <hr />

          <h2>2. Indexers</h2>

          <p>
            An <strong>indexer</strong> lets you treat an object as if it were an array.  
            Instead of calling a method like <code>list.GetItem(0)</code>, you can write <code>list[0]</code>.
          </p>

          <p>
            Indexers are especially useful when a class is mainly a collection of items.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class StudentList
{
    private string[] names = new string[5];

    // Indexer
    public string this[int index]
    {
        get
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            return names[index];
        }
        set
        {
            if (index < 0 || index >= names.Length)
                throw new IndexOutOfRangeException("Invalid index");
            names[index] = value;
        }
    }
}

// Usage
StudentList list = new StudentList();
list[0] = "Ali";
list[1] = "Sara";
list[2] = "Ahmed";

Console.WriteLine(list[0]);   // Ali
Console.WriteLine(list[1]);   // Sara`}
            caption="Indexer that makes the object behave like an array"
          />

          <h3>How this code is structured</h3>
          <ul>
            <li>The special syntax <code>this[int index]</code> defines the indexer.</li>
            <li>The <code>get</code> accessor runs when you read <code>list[0]</code>.</li>
            <li>The <code>set</code> accessor runs when you write <code>list[0] = "Ali"</code>.</li>
            <li>We added bounds checking so the class protects itself from invalid indexes.</li>
          </ul>

          <h3>How to write an indexer yourself</h3>
          <ol>
            <li>Decide what type of index you need (usually <code>int</code>, sometimes <code>string</code>).</li>
            <li>Write <code>public Type this[int index] {{ get {{ ... }} set {{ ... }} }}</code>.</li>
            <li>Add validation for the index.</li>
            <li>Store the data in a private array, list, or dictionary.</li>
          </ol>

          <hr />

          <h2>3. init-only Setters (C# 9+)</h2>

          <p>
            Sometimes you want a property that can be set when the object is created, but never changed afterwards.
            The <code>init</code> accessor gives you exactly that.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    public string Name { get; init; }
    public int Age { get; init; }
}

// Correct usage – set during object initialization
Student s1 = new Student
{
    Name = "Ali",
    Age = 20
};

// This will give a compile-time error
// s1.Name = "Ahmed";   // Cannot modify after initialization`}
            caption="init-only properties – set once, then read-only"
          />

          <h3>Why init is useful</h3>
          <ul>
            <li>It gives you the safety of a read-only property.</li>
            <li>At the same time it still allows the convenient object-initializer syntax.</li>
            <li>It is perfect for data that should not change after the object is born.</li>
          </ul>

          <hr />

          <h2>4. Record Types (C# 9+)</h2>

          <p>
            A <strong>record</strong> is a special kind of type designed mainly for storing data.
            Records give you several useful features automatically:
          </p>
          <ul>
            <li>Value-based equality (two records with the same data are considered equal)</li>
            <li>A nice default <code>ToString()</code></li>
            <li>Easy immutability with <code>init</code> properties</li>
            <li>The powerful <code>with</code> expression for creating modified copies</li>
          </ul>

          <h3>4.1 Simple Record (Positional Syntax)</h3>
          <p>
            The shortest way to create a record is the positional syntax.
          </p>

          <CodeBlock
            language="csharp"
            code={`public record Student(string Name, int Age, string Course);

// Usage
Student s1 = new Student("Ali", 20, "C#");
Student s2 = new Student("Ali", 20, "C#");

Console.WriteLine(s1);                 // Student { Name = Ali, Age = 20, Course = C# }
Console.WriteLine(s1 == s2);           // True (value-based equality)`}
            caption="Positional record – short and powerful"
          />

          <h3>How this is different from a class</h3>
          <ul>
            <li>With a normal class, <code>s1 == s2</code> would be <code>false</code> because they are different objects.</li>
            <li>With a record, <code>s1 == s2</code> is <code>true</code> because the data inside is the same.</li>
            <li>Records are ideal when the identity of the object does not matter — only the data matters.</li>
          </ul>

          <h3>4.2 Record with Extra Members</h3>
          <p>
            You can still write a record in the longer form if you need methods or extra logic.
          </p>

          <CodeBlock
            language="csharp"
            code={`public record Student
{
    public string Name { get; init; }
    public int Age { get; init; }
    public string Course { get; init; }

    public Student(string name, int age, string course)
    {
        Name = name;
        Age = age;
        Course = course;
    }

    public void Display()
    {
        Console.WriteLine($"{Name} is {Age} years old and studies {Course}");
    }
}`}
            caption="Record that also contains a method"
          />

          <h3>4.3 with Expression (Non-destructive mutation)</h3>
          <p>
            Because records are often immutable, changing a value means creating a new copy.
            The <code>with</code> expression makes this easy and readable.
          </p>

          <CodeBlock
            language="csharp"
            code={`Student s1 = new Student("Ali", 20, "C#");
Student s2 = s1 with { Age = 21 };     // Creates a new copy with Age changed

Console.WriteLine(s1.Age);   // 20 (original stays the same)
Console.WriteLine(s2.Age);   // 21`}
            caption="with expression – create a modified copy without changing the original"
          />

          <p>
            This is called <strong>non-destructive mutation</strong>.  
            The original object is never changed; you get a brand-new object with the requested difference.
          </p>

          <hr />

          <h2>5. Complete Live Example</h2>

          <p>
            Let’s put several of these ideas together in a realistic <code>BankAccount</code> class.
          </p>

          <h3>Design thinking</h3>
          <ol>
            <li>Account number should never change after creation → <code>init</code>.</li>
            <li>Account holder can be updated → normal property.</li>
            <li>Balance must be protected from negative values → full property with private setter and validation.</li>
            <li>Deposit and Withdraw methods enforce business rules.</li>
          </ol>

          <CodeBlock
            language="csharp"
            code={`public class BankAccount
{
    private double balance;

    public string AccountNumber { get; init; }   // set only at creation
    public string AccountHolder { get; set; }    // can be changed later

    public double Balance
    {
        get { return balance; }
        private set                              // only this class can set it
        {
            if (value < 0)
                throw new ArgumentException("Balance cannot be negative");
            balance = value;
        }
    }

    public BankAccount(string accountNumber, string accountHolder, double initialBalance)
    {
        AccountNumber = accountNumber;
        AccountHolder = accountHolder;
        Balance = initialBalance;
    }

    public void Deposit(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive");
        Balance += amount;
    }

    public void Withdraw(double amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdraw amount must be positive");
        if (amount > Balance)
            throw new InvalidOperationException("Insufficient balance");
        Balance -= amount;
    }

    public void Display()
    {
        Console.WriteLine($"Account: {AccountNumber}");
        Console.WriteLine($"Holder : {AccountHolder}");
        Console.WriteLine($"Balance: {Balance:C}");
    }
}

// Testing
BankAccount acc = new BankAccount("PK-12345", "Ali Khan", 50000);
acc.Display();

acc.Deposit(15000);
acc.Withdraw(8000);
acc.Display();`}
            caption="BankAccount using init, validation, and encapsulation"
          />

          <hr />

          <h2>6. Practice Exercises</h2>

          <p>Try these yourself. Follow the thinking steps we used above.</p>

          <h3>Exercise 1 — Product with Validation</h3>
          <p>
            Create a class <code>Product</code> with properties: Name, Price, Quantity.  
            Add validation so that Price and Quantity cannot be negative.
          </p>
          <p><strong>How to approach it:</strong></p>
          <ol>
            <li>Start with auto-implemented properties.</li>
            <li>Change Price and Quantity to full properties with private backing fields.</li>
            <li>Add the validation logic inside the setters.</li>
            <li>Test by trying to set negative values and confirm that an exception is thrown.</li>
          </ol>

          <h3>Exercise 2 — Library with Indexer</h3>
          <p>
            Create a class <code>Library</code> that uses an indexer to store and retrieve book titles by index.
          </p>
          <p><strong>How to approach it:</strong></p>
          <ol>
            <li>Create a private array (or List) to hold the titles.</li>
            <li>Write the indexer <code>public string this[int index]</code>.</li>
            <li>Add bounds checking in both get and set.</li>
            <li>Test by assigning and reading several titles.</li>
          </ol>

          <h3>Exercise 3 — Employee Record</h3>
          <p>
            Create a record called <code>Employee</code> with properties Name, Id and Department.  
            Demonstrate the <code>with</code> expression by creating a new employee with a different department.
          </p>

          <hr />

          <h2>7. Session Challenge</h2>

          <p>Create a complete <strong>Student Record System</strong> that uses the features from this session.</p>

          <p><strong>Requirements:</strong></p>
          <ul>
            <li>A class or record for Student (Name, RollNo, Marks)</li>
            <li>Property validation for Marks (must be between 0 and 100)</li>
            <li>An indexer-based class to store multiple students</li>
            <li>Methods to:
              <ul>
                <li>Add a student</li>
                <li>Display all students</li>
                <li>Find a student by roll number</li>
              </ul>
            </li>
          </ul>

          <p><strong>Suggested order of work:</strong></p>
          <ol>
            <li>Design the Student type (class or record) with validation on Marks.</li>
            <li>Create a StudentCollection (or similar) class that uses an indexer.</li>
            <li>Add the required methods.</li>
            <li>Write a small test program that adds a few students and demonstrates searching and displaying.</li>
          </ol>

          <hr />

          <h2>8. Session Quiz</h2>
          <ol>
            <li>What is a property in C# and why is it preferred over a public field?</li>
            <li>What is an auto-implemented property?</li>
            <li>When should you use a full property instead of an auto-implemented property?</li>
            <li>What is an indexer and when is it useful?</li>
            <li>What does the <code>init</code> keyword do?</li>
            <li>What is a record type and how is it different from a normal class?</li>
            <li>What does the <code>with</code> expression do in records?</li>
            <li>What is non-destructive mutation?</li>
          </ol>

          <hr />

          <p><strong>Next Session:</strong> Namespaces and Exception Handling</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
