# Session 1 — C# & .NET Fundamentals

**Duration:** 2 hours  
**Focus:** Getting comfortable creating and running your first C# programs.

---

## Learning Objectives

By the end of this session, you should understand:

- What C# is
- What .NET is
- What a console application is
- Basic C# program structure
- `using`
- Classes
- `Main()`
- Statements
- Comments
- `Console.WriteLine()`
- `Console.ReadLine()`
- Basic input and output

---

## 1. What is C#?

C# (pronounced **C Sharp**) is a modern, strongly typed, object-oriented programming language developed by Microsoft.

C# is commonly used for:

- Web applications
- Desktop applications
- REST APIs
- Enterprise software
- Games
- Cloud applications
- Automation tools
- Backend systems

Examples of technologies commonly used with C# include:

- .NET
- ASP.NET Core
- Entity Framework Core
- SQL Server
- Blazor
- MAUI

---

## 2. What is .NET?

.NET is the development platform/runtime used to build and run applications written in languages such as C#.

A simple way to explain it:

```text
C#  = Programming Language
.NET = Platform that provides the tools/runtime/libraries to build and run applications
```

You do **not** need to memorize the internal architecture yet.

---

## 3. Create Your First Console Application

### Using Visual Studio

1. Open Visual Studio.
2. Select **Create a new project**.
3. Select **Console App**.
4. Choose **C#**.
5. Give the project a name such as:

```text
CSharpSession1
```

6. Create the project.
7. Run the application.

---

## 4. Hello World

A traditional C# console application looks like this:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}
```

### Explanation

#### `using System;`

```csharp
using System;
```

Imports the `System` namespace so we can use classes such as `Console`.

#### `class Program`

```csharp
class Program
{
}
```

Defines a class called `Program`.

#### `static void Main()`

```csharp
static void Main()
{
}
```

This is the **entry point** of the traditional console application.  
The program starts execution from `Main()`.

#### `Console.WriteLine()`

```csharp
Console.WriteLine("Hello World");
```

Displays text on the console and moves the cursor to the next line.

---

## 5. Printing Multiple Lines

```csharp
Console.WriteLine("Welcome to C#");
Console.WriteLine("My name is Ali");
Console.WriteLine("I am learning programming");
```

**Output:**

```text
Welcome to C#
My name is Ali
I am learning programming
```

---

## 6. Write vs WriteLine

### WriteLine

```csharp
Console.WriteLine("Hello");
Console.WriteLine("World");
```

**Output:**

```text
Hello
World
```

### Write

```csharp
Console.Write("Hello ");
Console.Write("World");
```

**Output:**

```text
Hello World
```

---

## 7. Comments

Comments are ignored by the compiler.

### Single-line comment

```csharp
// This is a comment
Console.WriteLine("Hello");
```

### Multi-line comment

```csharp
/*
    This is a
    multi-line comment
*/

Console.WriteLine("Hello");
```

> **Tip:** Use comments to explain *why* something is done, not every obvious line.

---

## 8. Taking Input

`Console.ReadLine()` reads input entered by the user.

```csharp
Console.Write("Enter your name: ");

string name = Console.ReadLine();

Console.WriteLine("Hello " + name);
```

**Example:**

```text
Enter your name: Ali
Hello Ali
```

---

## 9. String Interpolation

Instead of:

```csharp
Console.WriteLine("Hello " + name);
```

we can use:

```csharp
Console.WriteLine($"Hello {name}");
```

This is called **string interpolation**.

**Example:**

```csharp
string name = "Ali";
int age = 20;

Console.WriteLine($"My name is {name} and I am {age} years old.");
```

**Output:**

```text
My name is Ali and I am 20 years old.
```

---

## 10. Basic Student Exercise

Create a program that asks the user for:

- Name
- Age
- City
- Course

Then display:

```text
===== Student Information =====

Name: Ali
Age: 20
City: Karachi
Course: C#

================================
```

---

## 11. Session 1 Challenge

Create a simple **Introduction Program**.

**Input:**

```text
Enter your name:
Enter your age:
Enter your favorite programming language:
Enter your city:
```

**Output:**

```text
My name is Ali.
I am 20 years old.
My favorite programming language is C#.
I live in Karachi.
```

---

## Session 1 Quiz

1. What is C#?
2. What is .NET?
3. What does `Console.WriteLine()` do?
4. What does `Console.ReadLine()` do?
5. What is a class?
6. What is the purpose of `Main()`?
7. What is a comment?
8. What is the difference between `Write()` and `WriteLine()`?
9. What is string interpolation?
10. What symbol is used for a single-line comment?

---

## Instructor Notes (for teachers)

- Do **not** overload students with .NET internals.
- Main goal of this session:

```text
"I can create and run a C# program."
```

---

## Suggested 2-Hour Class Flow

| Time       | Activity                  |
|------------|---------------------------|
| 0–10 min   | Introduction to course    |
| 10–25 min  | C# and .NET               |
| 25–45 min  | First C# program          |
| 45–65 min  | Output and comments       |
| 65–85 min  | User input                |
| 85–105 min | Live coding exercise      |
| 105–115 min| Student challenge         |
| 115–120 min| Quiz / recap              |
