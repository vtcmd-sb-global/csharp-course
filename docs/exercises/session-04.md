# Session 4 — Exercises (Loops & Iteration)

**Goal:** Practice every major loop construct until it becomes automatic.

---

## Beginner Level

### Exercise 1 — Count & Print
Print all numbers from 1 to 100 using a `for` loop.  
Then modify it to print only multiples of 5.

### Exercise 2 — Sum Calculator
Ask the user for a positive integer `n`.  
Calculate and display the sum of all numbers from 1 to `n` using a `for` loop.

### Exercise 3 — Even / Odd Counter
Ask the user how many numbers they want to enter.  
Then read that many numbers and count how many are even and how many are odd.

### Exercise 4 — Password Attempts
Create a simple login simulation:
- Correct password is `"csharp123"`
- User has maximum 3 attempts
- Use a `while` or `do-while` loop
- After 3 failed attempts, display “Account locked”

---

## Intermediate Level

### Exercise 5 — Multiplication Table Generator
Ask the user for a number and print its multiplication table from 1 to 12 in this format:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 12 = 60
```

### Exercise 6 — Factorial
Write a program that calculates the factorial of a number using a `for` loop.  
Handle the case when the user enters 0 or 1 correctly (factorial = 1).

### Exercise 7 — Reverse a Number
Ask the user for an integer and print its reverse.

*Example:* Input `1234` → Output `4321`  
*(Use a `while` loop and modulo operator)*

### Exercise 8 — Pattern Printing A
Print this pattern using nested loops:
```text
*
* *
* * *
* * * *
* * * * *
```

### Exercise 9 — Pattern Printing B
Print this pattern:
```text
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

### Exercise 10 — Keep Asking Until Zero
Continuously ask the user to enter numbers. Stop when they enter `0`.

Then display:
- Count of numbers entered
- Sum
- Average
- Highest number
- Lowest number

---

## Advanced Level

### Exercise 11 — Prime Number Checker
Ask the user for a number and determine whether it is prime using a loop.  
*(A prime number is greater than 1 and has no divisors other than 1 and itself.)*

### Exercise 12 — Prime Numbers in Range
Print all prime numbers between 1 and 100 using nested loops.

### Exercise 13 — Fibonacci Sequence
Ask the user how many terms of the Fibonacci sequence they want.  
Print the sequence using a loop.

*Example (first 8 terms):*
```text
0 1 1 2 3 5 8 13
```

### Exercise 14 — Number Pyramid
Print this pyramid:
```text
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
```

### Exercise 15 — Menu-Driven Calculator (Loop Version)
Create a calculator that keeps running until the user chooses Exit:
```text
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit
```
Use a `do-while` loop for the menu and proper validation.

---

## Challenge Exercises (Job-Ready Style)

### Challenge A — Student Grade Analyzer (Enhanced)
- Ask how many students
- For each student take Name + Marks (validate 0–100)
- After all entries show:
  - Full list with grades
  - Highest & Lowest scorer
  - Class average
  - Pass / Fail count
  - Percentage of students who scored A+

### Challenge B — Simple ATM with Transaction History
Extend the ATM from the session notes:
- Keep a running list of the last 5 transactions (Deposit / Withdraw / amounts)
- Show transaction history as option 5
- Use loops to manage the history (you can use an array of fixed size 5)

---

## Self-Check Questions (Quick)
1. Which loop guarantees the body runs at least once?
2. When is `foreach` better than `for`?
3. What is the danger of forgetting to update the loop variable in a `while` loop?
4. Can you use `break` inside a nested loop? What does it affect?

---

# Session 4 — Assignment

**Title:** Interactive Number Tools + Pattern Master  
**Deadline:** Next session  
**Difficulty:** Intermediate → Advanced  

---

## Part A — Menu-Driven Number Tools (Required)

Create a console application with the following permanent menu:

```text
========== NUMBER TOOLS ==========
1. Print numbers from 1 to N
2. Print even numbers from 1 to N
3. Print odd numbers from 1 to N
4. Calculate sum of numbers from 1 to N
5. Calculate factorial of N
6. Print multiplication table of N
7. Check if a number is Prime
8. Generate Fibonacci sequence (N terms)
9. Exit
==================================
```

### Requirements
- The menu must keep appearing until the user selects Exit (use `do-while` or `while`).
- For every option that needs N, validate that the user entered a positive integer.
- Use the most appropriate loop for each feature.
- Display clear success / error messages.
- Format output neatly.

### Bonus (Optional but recommended)
- Add option 10: “Find all prime numbers between 1 and N”.
- Add a counter that shows how many operations the user performed during the session.

---

## Part B — Pattern Master (Required)
Implement at least 4 of the following patterns using nested loops. The user should be able to choose the pattern and the size.

1. Right-angled triangle of stars
2. Inverted right-angled triangle
3. Number triangle (`1`, `1 2`, `1 2 3`…)
4. Pyramid of stars (centered)
5. Diamond shape
6. Hollow square / rectangle

*Example of a centered pyramid (size 5):*
```text
    *
   * *
  * * *
 * * * *
* * * * *
```

---

## Part C — Mini Real-World Task (Highly Recommended)
### Student Result Processing System (Loop Version)

Ask how many students are in the class.  
For each student collect:
- Name
- Marks in 3 subjects (English, Math, Computer)

Validate every mark (0–100). Keep asking until valid.  
After all data is entered, produce a complete report:

```text
=========== CLASS RESULT ===========
Name          Total   %       Grade
------------------------------------
Ali           255     85.00   A+
Sara          210     70.00   A
...
------------------------------------
Class Average     : xx.xx
Highest Scorer    : Name (marks)
Lowest Scorer     : Name (marks)
Passed            : X students
Failed            : Y students
====================================
```
Use nested loops + proper validation loops.

---

## Submission Guidelines
- Create a new Console App named `Session04_Assignment`
- Put clean, readable code with comments where necessary
- Use meaningful variable names
- Handle invalid input gracefully (no crashes)
- You may use methods if you already know them (optional)

---

## Evaluation Criteria

| Criteria | Marks |
| :--- | :--- |
| Correct menu loop | 15 |
| Proper input validation | 20 |
| Correct implementation of all required tools | 25 |
| Patterns (at least 4) | 20 |
| Code quality & readability | 10 |
| Bonus features | 10 |
| **Total** | **100** |

---

*Good luck! This assignment trains the exact skills used in real entry-level coding tests and interviews.*

---

## Quick Exploration of Topics

### 1. LINQ Query Syntax (Preview – full deep dive in Session 12)

LINQ Query Syntax looks similar to SQL and is very readable:

```csharp
// Method Syntax (most common in real projects)
var result = numbers.Where(n => n > 50).OrderBy(n => n);

// Query Syntax (SQL-like)
var result = from n in numbers
             where n > 50
             orderby n
             select n;
```
*Both produce the same result.*  
Query syntax is excellent for complex joins and multi-step queries. We will cover it thoroughly later with real collections, filtering, grouping, and joining.

### 2. Recursion Concepts (Preview – introduced properly in Session 5)
Recursion = a method that calls itself.

*Classic example – Factorial:*
```csharp
int Factorial(int n)
{
    if (n <= 1)           // base case (stopping condition)
        return 1;
    
    return n * Factorial(n - 1);   // recursive case
}
```

**Key ideas you must master:**
- **Base case** → prevents infinite recursion
- **Recursive case** → problem becomes smaller
- Every recursive solution can also be written with loops (and vice-versa)
- **Stack overflow risk** if base case is missing or wrong

We will practice recursion with factorial, Fibonacci, sum of digits, and simple tree-like problems in Session 5.