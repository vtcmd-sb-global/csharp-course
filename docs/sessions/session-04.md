# Session 4 — Loops & Iteration

**Duration:** 2 hours  
**Focus:** Making programs repeat work efficiently and safely.

---

## Learning Objectives

By the end of this session, you should be able to:

- Understand why loops are essential
- Use `for`, `while`, `do-while`, and `foreach` correctly
- Choose the right loop for the job
- Control loop flow with `break` and `continue`
- Work with nested loops
- Avoid infinite loops and common off-by-one errors
- Write clean, readable looping code
- Solve practical problems using loops
- Answer common interview questions related to loops

---

## 1. Why Do We Need Loops?

Without loops you would have to write the same code many times:

```csharp
Console.WriteLine("Hello");
Console.WriteLine("Hello");
Console.WriteLine("Hello");
// ... 100 more times
```

With a loop you write the logic once and control how many times it runs.

Loops are used for:
- Printing sequences
- Processing arrays and collections
- Reading user input until a condition is met
- Calculating totals, averages, factorials, etc.
- Searching and filtering data
- Building menus and interactive programs

---

## 2. The for Loop

Best when you know exactly how many times you want to repeat something, or when you need an index.

### Syntax
```csharp
for (initialization; condition; increment/decrement)
{
    // code to repeat
}
```

### Basic Example
```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine($"Hello {i}");
}
```

**Output:**
```text
Hello 1
Hello 2
Hello 3
Hello 4
Hello 5
```

### How it works step-by-step
1. `int i = 1` → initialization (runs only once)
2. Check `i <= 5`
3. If true → run the body
4. Execute `i++`
5. Go back to step 2
6. When condition becomes false → exit the loop

### Counting Down
```csharp
for (int i = 10; i >= 1; i--)
{
    Console.WriteLine(i);
}
Console.WriteLine("Blast off!");
```

### Skipping Values (Step)
```csharp
// Print even numbers from 2 to 20
for (int i = 2; i <= 20; i += 2)
{
    Console.Write($"{i} ");
}
```

### Common Pattern – Sum of Numbers
```csharp
int sum = 0;

for (int i = 1; i <= 10; i++)
{
    sum += i;
}

Console.WriteLine($"Sum = {sum}");   // 55
```

---

## 3. The while Loop

Best when you don’t know in advance how many times the loop should run.  
The condition is checked before each iteration.

### Syntax
```csharp
while (condition)
{
    // code
}
```

### Example – Countdown
```csharp
int counter = 5;

while (counter > 0)
{
    Console.WriteLine(counter);
    counter--;
}

Console.WriteLine("Done!");
```

### Example – Keep Asking Until Valid Input
```csharp
int age;

Console.Write("Enter your age: ");
while (!int.TryParse(Console.ReadLine(), out age) || age < 0 || age > 120)
{
    Console.Write("Invalid age. Please enter again: ");
}

Console.WriteLine($"Your age is {age}");
```

> **Important:** Always make sure the condition will eventually become false, otherwise you create an infinite loop.

---

## 4. The do-while Loop

Similar to `while`, but the body runs at least once.  
The condition is checked after the body.

### Syntax
```csharp
do
{
    // code
} while (condition);
```

### Classic Menu Example
```csharp
string choice;

do
{
    Console.WriteLine("===== MENU =====");
    Console.WriteLine("1. View Profile");
    Console.WriteLine("2. Settings");
    Console.WriteLine("3. Exit");
    Console.Write("Enter choice: ");
    choice = Console.ReadLine();

    switch (choice)
    {
        case "1":
            Console.WriteLine("Showing profile...");
            break;
        case "2":
            Console.WriteLine("Opening settings...");
            break;
        case "3":
            Console.WriteLine("Goodbye!");
            break;
        default:
            Console.WriteLine("Invalid choice.");
            break;
    }

} while (choice != "3");
```

### When to use do-while:
- Menus
- Input validation that must happen at least once
- Any situation where the code must run before checking the condition

---

## 5. The foreach Loop

The most common and safest loop when you just want to go through every item in a collection (array, `List`, etc.).  
You do not manage an index.

### Syntax
```csharp
foreach (var item in collection)
{
    // use item
}
```

### Example with Array
```csharp
string[] cities = { "Karachi", "Lahore", "Islamabad", "Peshawar" };

foreach (string city in cities)
{
    Console.WriteLine(city);
}
```

### Example with List (preview – we will cover collections deeply later)
```csharp
List<int> numbers = new List<int> { 10, 20, 30, 40, 50 };

foreach (int num in numbers)
{
    Console.WriteLine(num * 2);
}
```

### Important Rules of foreach
- You cannot change the collection size while looping (add/remove)
- You should not modify the current item in a way that breaks the iteration
- Prefer `foreach` when you only need to read the elements

---

## 6. break and continue

### break – Exit the loop immediately
```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 6)
    {
        break;          // stop the loop completely
    }
    Console.WriteLine(i);
}
// Output: 1 2 3 4 5
```

### continue – Skip the rest of the current iteration
```csharp
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        continue;       // skip even numbers
    }
    Console.WriteLine(i);
}
// Output: 1 3 5 7 9
```

---

## 7. Nested Loops

A loop inside another loop.

### Example – Multiplication Table
```csharp
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= 10; j++)
    {
        Console.Write($"{i * j,4}");   // ,4 means width of 4
    }
    Console.WriteLine();
}
```

### Example – Pattern Printing (Stars)
```csharp
// Right-angled triangle
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write("* ");
    }
    Console.WriteLine();
}
```

**Output:**
```text
* 
* * 
* * * 
* * * * 
* * * * *
```

---

## 8. Common Mistakes & Best Practices

| Mistake | Better Approach |
| :--- | :--- |
| **Infinite loop** (`while(true)` without exit) | Always have a clear exit condition or use `break` carefully |
| **Off-by-one errors** (`i <= length` vs `i < length`) | Be careful with array indexes (0-based) |
| **Modifying a collection inside `foreach`** | Use `for` loop or create a new collection |
| **Using `for` when `foreach` is clearer** | Prefer `foreach` for simple iteration |
| **Deeply nested loops** (3+ levels) | Consider extracting methods or using LINQ later |
| **Not using braces** | Always use `{ }` even for single-line bodies |

> **Performance tip (for later):**  
> When building large strings inside a loop, prefer `StringBuilder` instead of `+=`.

---

## 9. Practical Mini Projects

### Mini Project 1 – Number Guessing Game
```csharp
Random random = new Random();
int secret = random.Next(1, 101);
int guess;
int attempts = 0;

Console.WriteLine("Guess the number between 1 and 100");

do
{
    Console.Write("Your guess: ");
    guess = int.Parse(Console.ReadLine());
    attempts++;

    if (guess < secret)
        Console.WriteLine("Too low!");
    else if (guess > secret)
        Console.WriteLine("Too high!");
    else
        Console.WriteLine($"Correct! You took {attempts} attempts.");

} while (guess != secret);
```

### Mini Project 2 – Simple ATM with Loop (extends Session 3)
```csharp
decimal balance = 50000;
bool running = true;

while (running)
{
    Console.WriteLine("\n===== ATM =====");
    Console.WriteLine("1. Check Balance");
    Console.WriteLine("2. Deposit");
    Console.WriteLine("3. Withdraw");
    Console.WriteLine("4. Exit");
    Console.Write("Choice: ");

    string input = Console.ReadLine();

    switch (input)
    {
        case "1":
            Console.WriteLine($"Balance: {balance:C}");
            break;

        case "2":
            Console.Write("Amount to deposit: ");
            if (decimal.TryParse(Console.ReadLine(), out decimal deposit) && deposit > 0)
            {
                balance += deposit;
                Console.WriteLine($"New Balance: {balance:C}");
            }
            else
                Console.WriteLine("Invalid amount.");
            break;

        case "3":
            Console.Write("Amount to withdraw: ");
            if (decimal.TryParse(Console.ReadLine(), out decimal withdraw) && withdraw > 0)
            {
                if (withdraw <= balance)
                {
                    balance -= withdraw;
                    Console.WriteLine($"New Balance: {balance:C}");
                }
                else
                    Console.WriteLine("Insufficient funds.");
            }
            else
                Console.WriteLine("Invalid amount.");
            break;

        case "4":
            running = false;
            Console.WriteLine("Thank you for using our ATM.");
            break;

        default:
            Console.WriteLine("Invalid option.");
            break;
    }
}
```

---

## 10. Session 4 Challenge

### Challenge: Student Marks Analyzer
Write a program that:

1. Asks how many students are in the class.
2. For each student, asks for their name and marks (0–100).
3. Validates that marks are between 0 and 100.
4. After all data is entered, displays:
   - List of all students with their marks and grade
   - Highest marks + student name
   - Lowest marks + student name
   - Class average
   - Number of students who passed (≥ 50) and failed

#### Grading:
- **80–100** → A+
- **70–79**  → A
- **60–69**  → B
- **50–59**  → C
- **Below 50** → F

*Use appropriate loops (`for` + `while` for validation is a good combination).*

---

## 11. Exercises

### Exercise 1 (Beginner)
Print numbers from 1 to 50 using a `for` loop.  
Print only the even numbers using `continue`.

### Exercise 2 (Beginner)
Ask the user for a number `n` and print the multiplication table of `n` (1 to 10).

### Exercise 3 (Intermediate)
Write a program that calculates the factorial of a number using a `for` loop.

### Exercise 4 (Intermediate)
Print the following pattern:
```text
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

### Exercise 5 (Intermediate)
Ask the user to enter numbers until they enter 0.  
Then display the sum and average of all entered numbers (excluding 0).

### Exercise 6 (Advanced)
Write a program that finds all prime numbers between 1 and 100 using nested loops.

---

## 12. Session 4 Quiz

1. When should you prefer a `for` loop over a `while` loop?
2. What is the main difference between `while` and `do-while`?
3. Why is `foreach` usually safer than a classic `for` loop when reading a collection?
4. What does `break` do inside a loop?
5. What does `continue` do?
6. What is an infinite loop and how can you avoid it?
7. Can you modify the size of a `List` while using `foreach`? Why or why not?
8. Write a simple `for` loop that prints numbers from 10 down to 1.
9. What is a nested loop? Give one real-world example.
10. Which loop is best for building a menu that should keep showing until the user chooses Exit?

---

## 13. Interview-Style Questions

- **Q1.** What is the difference between `break` and `continue`?
- **Q2.** Explain the difference between `while` and `do-while` with a practical example.
- **Q3.** Why might `foreach` be preferred over `for` when iterating a collection?
- **Q4.** How would you stop an infinite loop in a real application?
- **Q5.** What happens if you try to add/remove items from a `List` while iterating it with `foreach`?
- **Q6.** Write a loop that prints the Fibonacci sequence up to `n` terms.
- **Q7.** How can nested loops lead to performance problems? How would you improve them?