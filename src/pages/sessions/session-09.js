import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session09() {
  return (
    <Layout
      title="Session 09 — Inheritance, Method Overriding & protected"
      description="Inheritance in C# — Base classes, Derived classes, Method Overriding, virtual, override, base keyword and protected access modifier"
    >
      <CustomLayout>
        <article className="session-content">
          <h1>Session 09 — Inheritance, Method Overriding &amp; protected</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn how one class can inherit from another, reuse code, and specialize behavior through method overriding.</p>
          <p><strong>Prerequisite:</strong> Session 08 (Classes, Objects, Properties, Constructors, Encapsulation).</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what inheritance is and why it is useful</li>
            <li>Create a base class and a derived class using the <code>:</code> syntax</li>
            <li>Understand what is inherited and what is not</li>
            <li>Use the <code>protected</code> access modifier correctly</li>
            <li>Call the base class constructor with <code>base(...)</code></li>
            <li>Override methods using <code>virtual</code> and <code>override</code></li>
            <li>Use the <code>base</code> keyword to call the parent version of a method</li>
            <li>Understand the difference between method hiding (<code>new</code>) and overriding</li>
            <li>Build a practical inheritance hierarchy (Person → Student / Teacher, Animal → Dog / Cat, etc.)</li>
          </ul>

          <hr />

          <h2>1. What is Inheritance?</h2>
          <p>Inheritance allows a new class (called the <strong>derived class</strong> or <strong>child class</strong>) to reuse and extend the members of an existing class (called the <strong>base class</strong> or <strong>parent class</strong>).</p>

          <pre>
            <code>{`// Real-world analogy
Base class     →  Vehicle
Derived classes →  Car, Motorcycle, Truck`}</code>
          </pre>

          <p>All vehicles have some common features (speed, fuel, start engine…).  
Instead of copying that code into every class, we put the common code in a base class and let the other classes inherit it.</p>

          <h3>Benefits of Inheritance</h3>
          <ul>
            <li>Code reuse</li>
            <li>Easier maintenance (change once in the base class)</li>
            <li>Logical hierarchy that matches the real world</li>
            <li>Foundation for Polymorphism (next session)</li>
          </ul>

          <hr />

          <h2>2. Basic Inheritance Syntax</h2>

          <pre>
            <code>{`public class Person                     // Base class
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name} and I am {Age} years old.");
    }
}

public class Student : Person           // Derived class
{
    public string Course { get; set; }

    public void Study()
    {
        Console.WriteLine($"{Name} is studying {Course}.");
    }
}`}</code>
          </pre>

          <h3>How to use it</h3>
          <pre>
            <code>{`Student s = new Student();
s.Name = "Ali";          // inherited from Person
s.Age = 20;              // inherited from Person
s.Course = "C#";         // own property

s.Introduce();           // inherited method
s.Study();               // own method`}</code>
          </pre>

          <p><strong>Output:</strong></p>
          <pre>
            <code>{`Hi, I am Ali and I am 20 years old.
Ali is studying C#.`}</code>
          </pre>

          <hr />

          <h2>3. What is Inherited?</h2>
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Inherited?</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>public members</td>
                <td>Yes</td>
                <td>Fully accessible</td>
              </tr>
              <tr>
                <td>protected members</td>
                <td>Yes</td>
                <td>Accessible inside derived classes</td>
              </tr>
              <tr>
                <td>private members</td>
                <td>No</td>
                <td>Not visible to derived classes</td>
              </tr>
              <tr>
                <td>Constructors</td>
                <td>No</td>
                <td>Must be called explicitly with <code>base(...)</code></td>
              </tr>
              <tr>
                <td>static members</td>
                <td>Yes (shared)</td>
                <td>Belong to the type, not the instance</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. The protected Access Modifier</h2>
          <p><code>protected</code> members are visible inside the class itself <strong>and</strong> inside any class that inherits from it. They are <strong>not</strong> visible from outside code.</p>

          <pre>
            <code>{`public class Person
{
    protected string NationalId;     // visible to Student and Teacher

    public void SetNationalId(string id)
    {
        NationalId = id;
    }
}

public class Student : Person
{
    public void ShowId()
    {
        // This works because NationalId is protected
        Console.WriteLine($"Student ID: {NationalId}");
    }
}

// Outside code cannot access NationalId
Student s = new Student();
// s.NationalId = "123";   // Compile error`}</code>
          </pre>

          <hr />

          <h2>5. Calling the Base Constructor</h2>
          <p>Constructors are <strong>not</strong> inherited. The derived class must explicitly call a base constructor using the <code>base</code> keyword.</p>

          <pre>
            <code>{`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

public class Student : Person
{
    public string Course { get; set; }

    // Call the base constructor
    public Student(string name, int age, string course) : base(name, age)
    {
        Course = course;
    }
}

// Usage
Student s = new Student("Ali", 20, "C#");`}</code>
          </pre>

          <p><strong>Important:</strong> If you do not write <code>: base(...)</code>, the compiler will try to call the parameterless constructor of the base class. If the base class does not have one, you get a compile error.</p>

          <hr />

          <h2>6. Method Overriding (virtual + override)</h2>
          <p>Sometimes the derived class needs to provide its own version of a method that already exists in the base class. This is called <strong>method overriding</strong>.</p>

          <h3>Rules</h3>
          <ul>
            <li>The base method must be marked <code>virtual</code> (or <code>abstract</code>)</li>
            <li>The derived method must be marked <code>override</code></li>
            <li>The signature must be exactly the same</li>
          </ul>

          <pre>
            <code>{`public class Person
{
    public string Name { get; set; }

    // Mark as virtual so it can be overridden
    public virtual void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name}.");
    }
}

public class Student : Person
{
    public string Course { get; set; }

    // Override the base method
    public override void Introduce()
    {
        Console.WriteLine($"Hi, I am {Name} and I study {Course}.");
    }
}

public class Teacher : Person
{
    public string Subject { get; set; }

    public override void Introduce()
    {
        Console.WriteLine($"Hello, I am {Name}, your {Subject} teacher.");
    }
}`}</code>
          </pre>

          <h3>Using the classes</h3>
          <pre>
            <code>{`Person p1 = new Person { Name = "Sara" };
Person p2 = new Student { Name = "Ali", Course = "C#" };
Person p3 = new Teacher { Name = "Ahmed", Subject = "Mathematics" };

p1.Introduce();   // Hi, I am Sara.
p2.Introduce();   // Hi, I am Ali and I study C#.
p3.Introduce();   // Hello, I am Ahmed, your Mathematics teacher.`}</code>
          </pre>

          <p>Notice that even though the variable type is <code>Person</code>, the correct version of <code>Introduce()</code> is called. This is the beginning of <strong>Polymorphism</strong> (we will go deeper in the next session).</p>

          <hr />

          <h2>7. Calling the Base Version with base</h2>
          <p>Sometimes you want to extend the base behavior instead of completely replacing it.</p>

          <pre>
            <code>{`public class Student : Person
{
    public string Course { get; set; }

    public override void Introduce()
    {
        base.Introduce();   // call the original version first
        Console.WriteLine($"I am currently studying {Course}.");
    }
}`}</code>
          </pre>

          <hr />

          <h2>8. Method Hiding with new (Avoid when possible)</h2>
          <p>If you forget <code>virtual</code>/<code>override</code> and just write a method with the same name, you are <strong>hiding</strong> the base method, not overriding it.</p>

          <pre>
            <code>{`public class Person
{
    public void Introduce() { Console.WriteLine("I am a person."); }
}

public class Student : Person
{
    // This hides the base method (not recommended)
    public new void Introduce() { Console.WriteLine("I am a student."); }
}`}</code>
          </pre>

          <p><strong>Difference:</strong></p>
          <ul>
            <li><code>override</code> → true polymorphic behavior</li>
            <li><code>new</code> → just hides the base method (the base version is still called when the variable is of the base type)</li>
          </ul>

          <p><strong>Recommendation:</strong> Prefer <code>virtual</code> + <code>override</code>. Use <code>new</code> only when you have a strong reason.</p>

          <hr />

          <h2>9. Live Coding — Complete Example</h2>

          <pre>
            <code>{`public class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Animal(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic animal sound");
    }

    public virtual void DisplayInfo()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}

public class Dog : Animal
{
    public string Breed { get; set; }

    public Dog(string name, int age, string breed) : base(name, age)
    {
        Breed = breed;
    }

    public override void MakeSound()
    {
        Console.WriteLine("Woof! Woof!");
    }

    public override void DisplayInfo()
    {
        base.DisplayInfo();
        Console.WriteLine($"Breed: {Breed}");
    }
}

public class Cat : Animal
{
    public Cat(string name, int age) : base(name, age) { }

    public override void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

// Testing
Animal a1 = new Dog("Buddy", 3, "German Shepherd");
Animal a2 = new Cat("Whiskers", 2);

a1.MakeSound();      // Woof! Woof!
a1.DisplayInfo();

a2.MakeSound();      // Meow!
a2.DisplayInfo();`}</code>
          </pre>

          <hr />

          <h2>10. Practice Exercises</h2>

          <h3>Exercise 1 — Vehicle Hierarchy</h3>
          <p>Create:</p>
          <ul>
            <li><code>Vehicle</code> (base) with properties Brand, Speed and a virtual method <code>Start()</code></li>
            <li><code>Car</code> that inherits from Vehicle and adds NumberOfDoors. Override <code>Start()</code>.</li>
            <li><code>Motorcycle</code> that inherits from Vehicle and adds HasSidecar. Override <code>Start()</code>.</li>
          </ul>

          <h3>Exercise 2 — Employee Hierarchy</h3>
          <p>Create:</p>
          <ul>
            <li><code>Employee</code> with Name, Salary and a virtual method <code>CalculateBonus()</code></li>
            <li><code>Manager</code> that overrides <code>CalculateBonus()</code> to return 20% of salary</li>
            <li><code>Developer</code> that overrides <code>CalculateBonus()</code> to return 10% of salary</li>
          </ul>

          <h3>Exercise 3 — Shape Hierarchy (warm-up for polymorphism)</h3>
          <p>Create a base class <code>Shape</code> with a virtual method <code>CalculateArea()</code>.  
Then create <code>Circle</code> and <code>Rectangle</code> that override it.</p>

          <hr />

          <h2>11. Session 09 Challenge</h2>
          <p>Build a small school system:</p>
          <ul>
            <li>Base class: <code>Person</code> (Name, Age, virtual Introduce())</li>
            <li>Derived: <code>Student</code> (StudentId, Course, override Introduce())</li>
            <li>Derived: <code>Teacher</code> (EmployeeId, Subject, override Introduce())</li>
            <li>Create a few objects and store them in a <code>List&lt;Person&gt;</code></li>
            <li>Loop through the list and call <code>Introduce()</code> on each one</li>
          </ul>
          <p>This challenge already uses the power of inheritance + polymorphism.</p>

          <hr />

          <h2>12. Session 09 Quiz</h2>
          <ol>
            <li>What is inheritance?</li>
            <li>What symbol is used to inherit from a class in C#?</li>
            <li>Are private members inherited?</li>
            <li>What does the <code>protected</code> access modifier allow?</li>
            <li>How do you call a base class constructor from a derived class?</li>
            <li>What keywords are used for method overriding?</li>
            <li>What is the difference between <code>override</code> and <code>new</code>?</li>
            <li>Can a derived class access private fields of the base class directly?</li>
            <li>Why do we mark a method as <code>virtual</code>?</li>
            <li>What happens if you don’t call <code>base(...)</code> and the base class has no parameterless constructor?</li>
          </ol>

          <hr />

          <p><strong>Next up (Session 10):</strong> Polymorphism, Abstract Classes, Interfaces, and the power of treating different objects the same way.</p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
