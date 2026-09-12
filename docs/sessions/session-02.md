# Session 2 — Variables, Data Types & Operators

**Duration:** 2 hours  
**Focus:** Understanding how to store and work with data.

---

## Learning Objectives

By the end of this session, you should understand:

- Variables
- Data types
- Declaration and initialization
- `int`, `double`, `float`, `decimal`, `char`, `string`, `bool`
- Constants
- Arithmetic operators
- Comparison operators
- Type conversion
- `Parse` and `TryParse`

---

## 1. What is a Variable?

A variable is a named location used to store a value.

```csharp
int age = 20;
```

Here:

```text
int  → Data type
age  → Variable name
20   → Value
```

---

## 2. Declaring a Variable

```csharp
int age;          // declaration
age = 20;         // assignment
```

Or both at once:

```csharp
int age = 20;
```

---

## 3. Common C# Data Types

| Type     | Example     | Purpose                          |
|----------|-------------|----------------------------------|
| `int`    | `25`        | Whole numbers                    |
| `long`   | `1000000`   | Large whole numbers              |
| `float`  | `10.5f`     | Decimal numbers                  |
| `double` | `10.5`      | Decimal numbers                  |
| `decimal`| `10.50m`    | Financial / precise decimals     |
| `char`   | `'A'`       | Single character                 |
| `string` | `"Ali"`     | Text                             |
| `bool`   | `true`      | True / false                     |

---

## 4. Examples

```csharp
int age = 25;
long population = 240000000;
float temperature = 36.5f;
double percentage = 85.75;
decimal salary = 75000.50m;
char grade = 'A';
string name = "Ali";
bool isStudent = true;
```

---

## 5. Displaying Variables

```csharp
string name = "Ali";
int age = 20;

Console.WriteLine(name);
Console.WriteLine(age);
```

Using string interpolation:

```csharp
Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");
```

---

## 6. Constants

A constant is a value that **cannot** be changed after declaration.

```csharp
const double PI = 3.14159;
const int PassingMarks = 50;
```

---

## 7. Arithmetic Operators

| Operator | Meaning       |
|----------|---------------|
| `+`      | Addition      |
| `-`      | Subtraction   |
| `*`      | Multiplication|
| `/`      | Division      |
| `%`      | Remainder     |

**Example:**

```csharp
int a = 10;
int b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3
Console.WriteLine(a % b);  // 1
```

> **Note:** Integer division removes the fractional part.

```csharp
int result = 10 / 3;       // 3
double result2 = 10.0 / 3.0; // 3.333...
```

---

## 8. Assignment Operators

```csharp
int x = 10;

x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 3;   // x = x * 3
x /= 2;   // x = x / 2
```

---

## 9. Increment and Decrement

```csharp
int x = 10;
x++;                // x becomes 11
Console.WriteLine(x);

x--;                // x becomes 10
```

---

## 10. Getting Numeric Input

### Convert.ToInt32

```csharp
Console.Write("Enter your age: ");
string input = Console.ReadLine();
int age = Convert.ToInt32(input);
Console.WriteLine($"Your age is {age}");
```

### int.Parse

```csharp
Console.Write("Enter a number: ");
int number = int.Parse(Console.ReadLine());
Console.WriteLine(number);
```

> **Problem:** Invalid input (e.g. `"abc"`) causes an exception.

### int.TryParse (Safer)

```csharp
Console.Write("Enter your age: ");

bool success = int.TryParse(Console.ReadLine(), out int age);

if (success)
{
    Console.WriteLine($"Your age is {age}");
}
else
{
    Console.WriteLine("Invalid age.");
}
```

*(You will study `if` properly in Session 3.)*

---

## Mini Project — Student Marks Calculator

Ask the student for:

```text
English Marks:
Math Marks:
Computer Marks:
```

Calculate:

- Total
- Average
- Percentage

**Example code:**

```csharp
Console.Write("English: ");
double english = double.Parse(Console.ReadLine());

Console.Write("Math: ");
double math = double.Parse(Console.ReadLine());

Console.Write("Computer: ");
double computer = double.Parse(Console.ReadLine());

double total = english + math + computer;
double average = total / 3;
double percentage = (total / 300) * 100;

Console.WriteLine($"Total: {total}");
Console.WriteLine($"Average: {average}");
Console.WriteLine($"Percentage: {percentage}%");
```

---

## Session 2 Challenge

Create a **Simple Billing Calculator**.

**Input:**

```text
Product Name:
Price:
Quantity:
Discount:
```

**Calculate & Display:**

```text
Subtotal
Discount Amount
Final Amount
```

**Example:**

```text
Product: Keyboard
Price: 2500
Quantity: 2
Discount: 10%

Subtotal: 5000
Discount: 500
Final Amount: 4500
```

---

## Session 2 Quiz

1. What is a variable?
2. What is a data type?
3. Difference between `int` and `double`?
4. Why does `float` normally use `f`?
5. Why does `decimal` normally use `m`?
6. What is a `char`?
7. What is a `bool`?
8. What is a constant?
9. What does `%` do?
10. Difference between `Parse()` and `TryParse()`?
