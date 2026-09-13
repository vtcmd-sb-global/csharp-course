# Session 5 — Methods, Parameters & Recursion

**Duration:** 2 hours  
**Focus:** Writing reusable, clean, and professional code using methods. Introduction to recursion.

---

## Learning Objectives

By the end of this session, you should be able to:
- Understand what methods are and why we use them
- Declare and call methods
- Work with parameters and return values
- Use `void` methods
- Apply method overloading
- Use optional parameters and named arguments
- Write local functions
- Understand and implement basic recursion
- Avoid common mistakes with methods and recursion
- Write cleaner, more maintainable code
- Answer common interview questions about methods and recursion

---

## 1. Why Do We Need Methods?

Without methods, your code quickly becomes long, repetitive, and hard to maintain.

**Problems without methods:**
- Same logic copied in many places
- Difficult to read
- Hard to fix bugs (you have to change the code in multiple places)
- Almost impossible to test individual pieces

**Benefits of methods:**
- Reusability
- Better organization
- Easier testing
- Cleaner and more professional code
- Team collaboration becomes easier

---

## 2. Basic Method Syntax

```csharp
returnType MethodName(parameterList)
{
    // method body
    return value;   // if returnType is not void
}
```

### Example – Simple Method

```csharp
void SayHello()
{
    Console.WriteLine("Hello from a method!");
}

// Calling the method
SayHello();
```

### Example – Method with Parameters and Return Value

```csharp
int Add(int a, int b)
{
    return a + b;
}

int result = Add(10, 20);
Console.WriteLine(result);   // 30
```

---

## 3. void Methods

Use `void` when a method performs an action but does not return a value.

```csharp
void PrintLine(string message)
{
    Console.WriteLine(message);
}

PrintLine("Welcome to Session 5");
```

---

## 4. Parameters

### Passing Values

```csharp
void Greet(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

Greet("Ali");
Greet("Sara");
```

### Multiple Parameters

```csharp
void DisplayStudent(string name, int age, string city)
{
    Console.WriteLine($"Name: {name}, Age: {age}, City: {city}");
}
```

---

## 5. Return Values

A method can return only one value (of the specified type).

```csharp
double CalculateAverage(double a, double b, double c)
{
    return (a + b + c) / 3;
}

double avg = CalculateAverage(80, 90, 85);
Console.WriteLine($"Average = {avg}");
```

> **Note:** If you need to return multiple values, you can use tuples, `out` parameters, or create a class (we will cover these later).

---

## 6. Method Overloading

You can have multiple methods with the same name as long as their parameter lists are different.

```csharp
int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}

int Add(int a, int b, int c)
{
    return a + b + c;
}
```

The compiler decides which version to call based on the arguments you pass.

---

## 7. Optional Parameters

You can give parameters default values.

```csharp
void Log(string message, string level = "Info")
{
    Console.WriteLine($"[{level}] {message}");
}

Log("Application started");               // uses default "Info"
Log("Something went wrong", "Error");
```

**Rules:**
- Optional parameters must come after required parameters
- You can have multiple optional parameters

---

## 8. Named Arguments

You can specify arguments by name (very useful with optional parameters).

```csharp
void CreateUser(string name, int age, string city = "Karachi", bool isActive = true)
{
    Console.WriteLine($"{name}, {age}, {city}, Active: {isActive}");
}

// Using named arguments
CreateUser(name: "Ali", age: 22);
CreateUser(age: 25, name: "Sara", isActive: false);
CreateUser("Omar", 30, city: "Lahore");
```

---

## 9. Local Functions (Modern C#)

You can declare a function inside another method. Useful for helper logic that is only needed in one place.

```csharp
void ProcessNumbers()
{
    int[] numbers = { 1, 2, 3, 4, 5 };

    int Square(int x)           // local function
    {
        return x * x;
    }

    foreach (int n in numbers)
    {
        Console.WriteLine(Square(n));
    }
}
```

---

## 10. Recursion – Introduction

Recursion is when a method calls itself.

**Every recursive method must have:**
- **Base case** → the condition that stops the recursion
- **Recursive case** → the method calls itself with a smaller problem

### Classic Example – Factorial

```csharp
int Factorial(int n)
{
    // Base case
    if (n <= 1)
        return 1;

    // Recursive case
    return n * Factorial(n - 1);
}

Console.WriteLine(Factorial(5));   // 120
```

**How it works (Factorial 5):**
```text
Factorial(5) → 5 * Factorial(4)
Factorial(4) → 4 * Factorial(3)
Factorial(3) → 3 * Factorial(2)
Factorial(2) → 2 * Factorial(1)
Factorial(1) → 1
```

### Another Example – Sum of Numbers from 1 to N

```csharp
int Sum(int n)
{
    if (n <= 0)
        return 0;

    return n + Sum(n - 1);
}
```

### Fibonacci (Recursive Version)

```csharp
int Fibonacci(int n)
{
    if (n <= 1)
        return n;

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
```

> **Warning:** The simple recursive Fibonacci is very slow for large `n` because of repeated calculations. Later we will learn better approaches (memoization / iteration).

---

## 11. Recursion vs Loops

| Aspect | Recursion | Loops |
| :--- | :--- | :--- |
| **Readability** | Often more elegant for some problems | Usually clearer for simple repetition |
| **Performance** | Can be slower + risk of stack overflow | Generally more efficient |
| **Memory** | Uses call stack | Uses constant extra memory |
| **Best for** | Tree/graph problems, divide-and-conquer | Most everyday repetition |

**Rule of thumb:** Prefer loops unless recursion makes the solution significantly clearer.

---

## 12. Common Mistakes

- Forgetting the base case → infinite recursion → `StackOverflowException`
- Not making the problem smaller in the recursive call
- Using too many parameters or deep nesting
- Returning the wrong type
- Modifying parameters unexpectedly

---

## 13. Practical Mini Projects

### Mini Project 1 – Simple Calculator using Methods

```csharp
int Add(int a, int b) => a + b;
int Subtract(int a, int b) => a - b;
int Multiply(int a, int b) => a * b;
double Divide(int a, int b) => b != 0 ? (double)a / b : 0;

Console.Write("Enter first number: ");
int x = int.Parse(Console.ReadLine());

Console.Write("Enter second number: ");
int y = int.Parse(Console.ReadLine());

Console.WriteLine($"Sum = {Add(x, y)}");
Console.WriteLine($"Difference = {Subtract(x, y)}");
Console.WriteLine($"Product = {Multiply(x, y)}");
Console.WriteLine($"Quotient = {Divide(x, y)}");
```

### Mini Project 2 – Grade Calculator with Methods

```csharp
string GetGrade(int marks)
{
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    return "F";
}

bool IsPass(int marks) => marks >= 50;
```

---

## 14. Session 5 Challenge

### Challenge: Number Utility Library

Create a program that offers the following menu using methods:

```text
1. Calculate Factorial (use recursion)
2. Calculate Sum from 1 to N (use recursion)
3. Generate Fibonacci sequence up to N terms
4. Check if a number is Prime (use a method)
5. Power function (base^exponent) using recursion
6. Exit
```

**Requirements:**
- Each feature must be implemented in its own method
- Use recursion for Factorial, Sum, and Power
- Validate user input
- Keep showing the menu until the user exits

---

## 15. Exercises

### Beginner
1. Write a method `PrintHello(string name)` that prints a greeting.
2. Write a method `IsEven(int number)` that returns `true` or `false`.
3. Write a method that returns the larger of two numbers.

### Intermediate
1. Write an overloaded `Area` method (for rectangle and circle).
2. Write a method with optional parameters to display a person’s info.
3. Write a recursive method that prints numbers from `N` down to 1.

### Advanced
1. Write a recursive method to calculate the power of a number ($x^y$).
2. Write a recursive method to reverse a string.
3. Write a method that returns both the minimum and maximum of an array (using a tuple).

---

## 16. Session 5 Quiz

1. What is the purpose of methods?
2. What does `void` mean?
3. What is method overloading?
4. What are optional parameters?
5. What are named arguments?
6. What is a local function?
7. What are the two essential parts of a recursive method?
8. What happens if you forget the base case?
9. When should you prefer recursion over a loop?
10. Can a method return more than one value directly? How can we solve this?

---

## 17. Interview-Style Questions

- **Q1.** What is the difference between a parameter and an argument?
- **Q2.** Explain method overloading with an example.
- **Q3.** What is recursion? Give a real-world analogy.
- **Q4.** What is a base case and why is it important?
- **Q5.** What is the risk of deep recursion?
- **Q6.** Difference between `ref` and `out` parameters *(preview – we will cover later)*.
- **Q7.** When would you use a local function instead of a private method?