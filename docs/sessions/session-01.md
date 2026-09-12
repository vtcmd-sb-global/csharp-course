Session 1 — C# & .NET Fundamentals
Duration: 2 hours  
Focus: Getting comfortable creating and running your first C# programs.
Learning Objectives
By the end of this session, you should understand:
What C# is
What .NET is
What a console application is
Basic C# program structure
Project files and folders you get when you create a new project
Why older projects had `Startup.cs` + `Program.cs` and modern ones usually have only `Program.cs`
Why modern `Program.cs` has no explicit `Main()` method
`using`
Classes
`Main()` (and the modern alternative)
Statements
Comments
`Console.WriteLine()`
`Console.ReadLine()`
Basic input and output
---
1. What is C#?
C# (pronounced C Sharp) is a modern, strongly typed, object-oriented programming language developed by Microsoft.
C# is commonly used for:
Web applications
Desktop applications
REST APIs
Enterprise software
Games
Cloud applications
Automation tools
Backend systems
Examples of technologies commonly used with C# include:
.NET
ASP.NET Core
Entity Framework Core
SQL Server
Blazor
MAUI
---
2. What is .NET?
.NET is the development platform/runtime used to build and run applications written in languages such as C#.
A simple way to explain it:
```text
C#   = Programming Language
.NET = Platform that provides the tools/runtime/libraries to build and run applications
```
You do not need to memorize the internal architecture yet.
---
3. Create Your First Console Application
Using Visual Studio
Open Visual Studio.
Select Create a new project.
Select Console App.
Choose C#.
Give the project a name such as:
```text
   CSharpSession1
   ```
On the Additional information screen:
Choose a recent .NET version (e.g. .NET 8 or .NET 9 / 10).
Leave “Do not use top-level statements” unchecked (this is the modern default).
Click Create.
Run the application (green play button or `Ctrl + F5`).
What files and folders do you get?
When Visual Studio (or the `dotnet new console` command) creates a modern console project, you typically see a structure like this:
```text
CSharpSession1/                  ← Solution folder
│
├── CSharpSession1.sln           ← Solution file (groups one or more projects)
│
└── CSharpSession1/              ← Project folder
    ├── CSharpSession1.csproj    ← Project file (settings, target framework, packages)
    ├── Program.cs               ← Your main source code file
    ├── bin/                     ← Compiled output (created when you build/run)
    └── obj/                     ← Temporary build files (created when you build/run)
```
Quick explanation of the important items
Item	Purpose
`.sln`	Solution file. A solution can contain multiple projects.
`.csproj`	Project file. Tells the compiler which .NET version to use, which packages to include, etc.
`Program.cs`	The file that contains the code that runs when you start the program.
`bin/` and `obj/`	Automatically generated folders. You almost never edit these by hand.
You will also see some settings enabled by default in modern projects (you can view them in the `.csproj` file):
Implicit usings – common namespaces like `System` are imported automatically.
Nullable reference types – helps catch null-related bugs earlier.
---
Older style vs Modern style (very important)
Older C# / .NET (before .NET 6, or if you check “Do not use top-level statements”)
`Program.cs` looked roughly like this:
```csharp
using System;

namespace CSharpSession1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```
There is an explicit class called `Program`.
There is an explicit entry-point method called `Main()`.
The program always starts executing from `Main()`.
Modern C# (.NET 6 and later – the default today)
`Program.cs` now looks like this:
```csharp
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
```
or simply:
```csharp
Console.WriteLine("Hello, World!");
```
What happened to `Main()` and the class?
C# 9 introduced top-level statements.
The compiler automatically generates a hidden `Program` class and a `Main` method for you.
You only write the code that would have been inside `Main()`.
This removes a lot of “boilerplate” (repetitive ceremony) so beginners can start writing useful code faster.
Both styles still work. The modern style is just shorter and is the default when you create a new console project today.
---
What about `Startup.cs`?
You may have seen older tutorials or projects that had two files:
`Program.cs`
`Startup.cs`
This was common in ASP.NET Core web applications (not pure console apps) before .NET 6:
File	Responsibility
`Program.cs`	Created the host and started the application (contained `Main` + `CreateHostBuilder`)
`Startup.cs`	Configured services (`ConfigureServices`) and the HTTP pipeline (`Configure`)
Starting with .NET 6, Microsoft introduced the minimal hosting model:
Everything is now written in a single `Program.cs` file using top-level statements.
`Startup.cs` is no longer generated by default.
You can still create a `Startup` class yourself if you prefer the older separation, but it is optional.
Summary of the change
Era	Console App	ASP.NET Core Web App
Older (.NET 5 and earlier)	`Program.cs` with explicit class + `Main()`	`Program.cs` + `Startup.cs`
Modern (.NET 6+)	`Program.cs` with top-level statements (no visible `Main`)	Single `Program.cs` (minimal hosting) – no `Startup.cs` by default
> **Note:** For this session we are only using console applications, so you will mainly work with the modern single-file `Program.cs`.
---
4. Hello World
A traditional (older-style) C# console application looks like this:
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
A modern C# console application (what Visual Studio creates by default) looks like this:
```csharp
Console.WriteLine("Hello World");
```
Both produce exactly the same result.
Explanation (works for both styles)
`using System;`
```csharp
using System;
```
Imports the `System` namespace so we can use classes such as `Console`.  
(In modern projects this is often automatic because of implicit usings.)
`class Program` (older style only)
```csharp
class Program
{
}
```
Defines a class called `Program`. In the modern style the compiler creates this class for you behind the scenes.
`static void Main()` (older style only)
```csharp
static void Main()
{
}
```
This is the entry point of the traditional console application.  
The program starts execution from `Main()`.
In the modern style there is no visible `Main()` method — the compiler generates it automatically and puts your top-level statements inside it.
`Console.WriteLine()`
```csharp
Console.WriteLine("Hello World");
```
Displays text on the console and moves the cursor to the next line.
---
5. Printing Multiple Lines
```csharp
Console.WriteLine("Welcome to C#");
Console.WriteLine("My name is Ali");
Console.WriteLine("I am learning programming");
```
Output:
```text
Welcome to C#
My name is Ali
I am learning programming
```
---
6. Write vs WriteLine
WriteLine
```csharp
Console.WriteLine("Hello");
Console.WriteLine("World");
```
Output:
```text
Hello
World
```
Write
```csharp
Console.Write("Hello ");
Console.Write("World");
```
Output:
```text
Hello World
```
---
7. Comments
Comments are ignored by the compiler.
Single-line comment
```csharp
// This is a comment
Console.WriteLine("Hello");
```
Multi-line comment
```csharp
/*
    This is a
    multi-line comment
*/
Console.WriteLine("Hello");
```
> **Tip:** Use comments to explain *why* something is done, not every obvious line.
---
8. Taking Input
`Console.ReadLine()` reads input entered by the user.
```csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();
Console.WriteLine("Hello " + name);
```
Example:
```text
Enter your name: Ali
Hello Ali
```
---
9. String Interpolation
Instead of:
```csharp
Console.WriteLine("Hello " + name);
```
we can use:
```csharp
Console.WriteLine($"Hello {name}");
```
This is called string interpolation.
Example:
```csharp
string name = "Ali";
int age = 20;
Console.WriteLine($"My name is {name} and I am {age} years old.");
```
Output:
```text
My name is Ali and I am 20 years old.
```
---
10. Basic Student Exercise
Create a program that asks the user for:
Name
Age
City
Course
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
11. Session 1 Challenge
Create a simple Introduction Program.
Input:
```text
Enter your name:
Enter your age:
Enter your favorite programming language:
Enter your city:
```
Output:
```text
My name is Ali.
I am 20 years old.
My favorite programming language is C#.
I live in Karachi.
```
---
Session 1 Quiz
What is C#?
What is .NET?
What does `Console.WriteLine()` do?
What does `Console.ReadLine()` do?
What is a class?
What is the purpose of `Main()`? (And what replaced it in modern C#?)
What is a comment?
What is the difference between `Write()` and `WriteLine()`?
What is string interpolation?
What symbol is used for a single-line comment?
Name the main files/folders you get when you create a new console project.
Why do modern projects often have only `Program.cs` instead of both `Program.cs` and `Startup.cs`?
