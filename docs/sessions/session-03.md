# Session 3 — Conditions & Decision Making

**Duration:** 2 hours  
**Focus:** Teaching programs how to make decisions.

---

## Learning Objectives

By the end of this session, you should understand:

- Decision making
- `if`
- `else`
- `else if`
- Nested `if`
- Comparison operators
- Logical operators
- `switch`
- Conditional (ternary) operator
- Basic validation

---

## 1. Why Do We Need Conditions?

Programs often need to make decisions.

```text
If marks >= 50
    Student passes
Otherwise
    Student fails
```

C# uses conditional statements for this.

---

## 2. if Statement

```csharp
if (condition)
{
    // code
}
```

**Example:**

```csharp
int age = 20;

if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
```

---

## 3. if / else

```csharp
int age = 16;

if (age >= 18)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Minor");
}
```

---

## 4. Comparison Operators

| Operator | Meaning                  |
|----------|--------------------------|
| `==`     | Equal                    |
| `!=`     | Not equal                |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal    |
| `<=`     | Less than or equal       |

---

## 5. else if

Useful when there are multiple possible conditions.

```csharp
int marks = 85;

if (marks >= 80)
{
    Console.WriteLine("A+");
}
else if (marks >= 70)
{
    Console.WriteLine("A");
}
else if (marks >= 60)
{
    Console.WriteLine("B");
}
else if (marks >= 50)
{
    Console.WriteLine("C");
}
else
{
    Console.WriteLine("Fail");
}
```

---

## 6. Nested if

An `if` inside another `if`.

```csharp
int age = 25;
bool hasLicense = true;

if (age >= 18)
{
    if (hasLicense)
    {
        Console.WriteLine("You can drive.");
    }
}
```

---

## 7. Logical Operators

### AND — `&&`

Both conditions must be true.

```csharp
int age = 25;

if (age >= 18 && age <= 60)
{
    Console.WriteLine("Valid working age.");
}
```

### OR — `||`

At least one condition must be true.

```csharp
string role = "Admin";

if (role == "Admin" || role == "Manager")
{
    Console.WriteLine("Access granted.");
}
```

### NOT — `!`

Reverses a boolean value.

```csharp
bool isLoggedIn = false;

if (!isLoggedIn)
{
    Console.WriteLine("Please login.");
}
```

---

## 8. Combining Conditions

```csharp
int age = 22;
bool hasId = true;

if (age >= 18 && hasId)
{
    Console.WriteLine("Access granted.");
}
else
{
    Console.WriteLine("Access denied.");
}
```

---

## 9. switch Statement

Useful when checking one value against multiple known options.

```csharp
int day = 2;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;

    case 2:
        Console.WriteLine("Tuesday");
        break;

    case 3:
        Console.WriteLine("Wednesday");
        break;

    default:
        Console.WriteLine("Invalid day");
        break;
}
```

### switch with String

```csharp
string role = "Admin";

switch (role)
{
    case "Admin":
        Console.WriteLine("Full access");
        break;

    case "Teacher":
        Console.WriteLine("Teacher access");
        break;

    case "Student":
        Console.WriteLine("Student access");
        break;

    default:
        Console.WriteLine("Unknown role");
        break;
}
```

---

## 10. Conditional Operator (Ternary)

A short way of writing a simple `if/else`.

```csharp
int age = 20;

string result = age >= 18 ? "Adult" : "Minor";

Console.WriteLine(result);
```

Think of it as:

```text
condition ? value-if-true : value-if-false
```

---

## 11. Practical Example — Grade Calculator

```csharp
Console.Write("Enter marks: ");
int marks = int.Parse(Console.ReadLine());

if (marks >= 80)
{
    Console.WriteLine("Grade: A+");
}
else if (marks >= 70)
{
    Console.WriteLine("Grade: A");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade: B");
}
else if (marks >= 50)
{
    Console.WriteLine("Grade: C");
}
else
{
    Console.WriteLine("Grade: F");
}
```

---

## 12. Practical Example — Login

```csharp
Console.Write("Username: ");
string username = Console.ReadLine();

Console.Write("Password: ");
string password = Console.ReadLine();

if (username == "admin" && password == "12345")
{
    Console.WriteLine("Login successful.");
}
else
{
    Console.WriteLine("Invalid username or password.");
}
```

> **Teaching note only:** Real applications should never store passwords like this.

---

## 13. Practical Example — ATM Menu

```csharp
decimal balance = 50000;

Console.WriteLine("===== ATM =====");
Console.WriteLine("1. Check Balance");
Console.WriteLine("2. Deposit");
Console.WriteLine("3. Withdraw");
Console.WriteLine("4. Exit");

Console.Write("Choose an option: ");
int choice = int.Parse(Console.ReadLine());

switch (choice)
{
    case 1:
        Console.WriteLine($"Balance: {balance}");
        break;

    case 2:
        Console.Write("Enter deposit amount: ");
        decimal deposit = decimal.Parse(Console.ReadLine());

        if (deposit > 0)
        {
            balance += deposit;
            Console.WriteLine($"New Balance: {balance}");
        }
        else
        {
            Console.WriteLine("Invalid amount.");
        }
        break;

    case 3:
        Console.Write("Enter withdrawal amount: ");
        decimal withdrawal = decimal.Parse(Console.ReadLine());

        if (withdrawal > 0 && withdrawal <= balance)
        {
            balance -= withdrawal;
            Console.WriteLine($"New Balance: {balance}");
        }
        else
        {
            Console.WriteLine("Invalid withdrawal.");
        }
        break;

    case 4:
        Console.WriteLine("Goodbye!");
        break;

    default:
        Console.WriteLine("Invalid option.");
        break;
}
```

---

## Session 3 Challenge

Build a **Student Result System**.

**Ask for:**

```text
Student Name:
English Marks:
Math Marks:
Computer Marks:
```

**Calculate & Display:**

- Total
- Percentage
- Grade
- Pass / Fail

**Grading Rules:**

```text
80–100 → A+
70–79  → A
60–69  → B
50–59  → C
Below 50 → F
```

**Extra Requirements:**

- Marks cannot be below 0
- Marks cannot be above 100
- Student passes only if the required criteria are met

---

## Session 3 Homework

Create a **Simple ATM Program** with the following menu:

```text
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
```

**Requirements:**

- Initial balance = 50,000
- Deposit must be greater than 0
- Withdrawal must be greater than 0
- Withdrawal cannot exceed balance
- Display appropriate messages
- Use `switch`
- Use `if/else`
- Use variables and operators

---

## Session 3 Quiz

1. Why do we use conditional statements?
2. What is an `if` statement?
3. Difference between `if` and `if/else`?
4. When do we use `else if`?
5. What does `==` mean?
6. Difference between `=` and `==`?
7. What does `&&` mean?
8. What does `||` mean?
9. What does `!` mean?
10. When is `switch` useful?
11. What is the conditional operator?
12. What is a nested `if`?

---

## Instructor Notes

Spend significant time on **logic translation**.

Students should be able to convert this:

```text
If marks are greater than or equal to 50,
the student passes.
Otherwise,
the student fails.
```

into this:

```csharp
if (marks >= 50)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Fail");
}
```

This logical translation skill is more important than memorizing syntax.
