# Session 6 — Arrays & Strings

**Duration:** 2 hours  
**Focus:** Storing and working with collections of data using arrays, and mastering essential string operations.

---

## Learning Objectives

By the end of this session, you should be able to:
- Declare, initialize, and use one-dimensional arrays
- Access and modify array elements safely
- Loop through arrays using `for` and `foreach`
- Perform common operations (sum, average, min, max, search, reverse)
- Work with multidimensional (2D) arrays
- Understand jagged arrays at a basic level
- Use important `Array` class methods
- Perform essential string operations
- Avoid `IndexOutOfRangeException` and other common mistakes
- Solve practical problems using arrays and strings
- Answer common interview questions on arrays and strings

---

## 1. What is an Array?

An **array** is a fixed-size collection of elements of the **same type**.

```csharp
// An array of 5 integers
int[] numbers = new int[5];
```

**Key characteristics:**
- Fixed size (cannot grow or shrink after creation)
- Zero-based indexing (first element is at index 0)
- All elements must be of the same type
- Stored in contiguous memory (fast access)

---

## 2. Declaring and Initializing Arrays

### Different ways to create arrays

```csharp
// 1. Declare size only (all elements get default value)
int[] marks = new int[5];               // all values = 0

// 2. Declare and initialize
int[] numbers = new int[] { 10, 20, 30, 40, 50 };

// 3. Short form (most common)
int[] scores = { 85, 90, 78, 92, 88 };

// 4. Using var
var cities = new string[] { "Karachi", "Lahore", "Islamabad" };
```

### Default values
- `int`, `double`, etc. → `0`
- `bool` → `false`
- `string` / reference types → `null`

---

## 3. Accessing and Modifying Elements

```csharp
int[] numbers = { 10, 20, 30, 40, 50 };

Console.WriteLine(numbers[0]);   // 10 (first element)
Console.WriteLine(numbers[4]);   // 50 (last element)

numbers[2] = 35;                 // change value at index 2
```

### Getting the Length

```csharp
Console.WriteLine(numbers.Length);   // 5
```

> **Important:** Valid indexes are from `0` to `Length - 1`.

---

## 4. Looping Through Arrays

### Using `for` loop (when you need the index)

```csharp
int[] numbers = { 10, 20, 30, 40, 50 };

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"Index {i}: {numbers[i]}");
}
```

### Using `foreach` (preferred when you only need values)

```csharp
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

---

## 5. Common Array Operations

### Sum and Average

```csharp
int[] marks = { 80, 90, 75, 85, 95 };
int sum = 0;

foreach (int mark in marks)
{
    sum += mark;
}

double average = (double)sum / marks.Length;
Console.WriteLine($"Sum = {sum}, Average = {average}");
```

### Finding Minimum and Maximum

```csharp
int min = marks[0];
int max = marks[0];

for (int i = 1; i < marks.Length; i++)
{
    if (marks[i] < min) min = marks[i];
    if (marks[i] > max) max = marks[i];
}

Console.WriteLine($"Min = {min}, Max = {max}");
```

### Searching for a Value

```csharp
int search = 85;
bool found = false;

for (int i = 0; i < marks.Length; i++)
{
    if (marks[i] == search)
    {
        Console.WriteLine($"Found at index {i}");
        found = true;
        break;
    }
}

if (!found)
    Console.WriteLine("Not found");
```

---

## 6. Useful Array Class Methods

```csharp
int[] numbers = { 50, 20, 40, 10, 30 };

Array.Sort(numbers);                 // sorts in ascending order
Array.Reverse(numbers);              // reverses the array
int index = Array.IndexOf(numbers, 40);  // returns index or -1
bool exists = Array.Exists(numbers, n => n > 25);
```

---

## 7. Multidimensional Arrays (2D Arrays)

A 2D array is like a table (rows and columns).

### Declaration

```csharp
// 3 rows, 4 columns
int[,] matrix = new int[3, 4];

// Initialize
int[,] matrix = {
    { 1, 2, 3, 4 },
    { 5, 6, 7, 8 },
    { 9, 10, 11, 12 }
};
```

### Accessing Elements

```csharp
Console.WriteLine(matrix[1, 2]);   // 7 (row 1, column 2)
matrix[0, 0] = 100;
```

### Getting Dimensions

```csharp
int rows = matrix.GetLength(0);    // 3
int cols = matrix.GetLength(1);    // 4
```

### Looping Through a 2D Array

```csharp
for (int i = 0; i < matrix.GetLength(0); i++)
{
    for (int j = 0; j < matrix.GetLength(1); j++)
    {
        Console.Write($"{matrix[i, j],4}");
    }
    Console.WriteLine();
}
```

---

## 8. Jagged Arrays (Array of Arrays)

Each row can have a different length.

```csharp
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5, 6 };
jagged[2] = new int[] { 7 };
```

---

## 9. Working with Strings

In C#, a string is a sequence of characters (immutable).

### Common String Operations

```csharp
string name = "Muhammad Ali";

Console.WriteLine(name.Length);              // 12
Console.WriteLine(name.ToUpper());           // MUHAMMAD ALI
Console.WriteLine(name.ToLower());           // muhammad ali
Console.WriteLine(name.Contains("Ali"));     // true
Console.WriteLine(name.StartsWith("Muh"));   // true
Console.WriteLine(name.EndsWith("Ali"));     // true
Console.WriteLine(name.IndexOf("Ali"));      // 9
Console.WriteLine(name.Replace("Ali", "Ahmed"));
Console.WriteLine(name.Substring(0, 8));     // Muhammad
Console.WriteLine(name.Trim());              // removes leading/trailing spaces

string[] parts = name.Split(' ');            // ["Muhammad", "Ali"]
string joined = string.Join("-", parts);     // Muhammad-Ali
```

### Strings are Immutable

```csharp
string original = "Hello";
string modified = original.Replace("H", "J");

Console.WriteLine(original);   // Hello (unchanged)
Console.WriteLine(modified);   // Jello
```

---

## 10. Practical Mini Projects

### Mini Project 1 – Student Marks Analyzer

```csharp
Console.Write("How many students? ");
int n = int.Parse(Console.ReadLine());

string[] names = new string[n];
int[] marks = new int[n];

for (int i = 0; i < n; i++)
{
    Console.Write($"Enter name of student {i + 1}: ");
    names[i] = Console.ReadLine();
    Console.Write($"Enter marks of {names[i]}: ");
    marks[i] = int.Parse(Console.ReadLine());
}

// Display report
int total = 0;
int max = marks[0], min = marks[0];
string topStudent = names[0], lowStudent = names[0];

for (int i = 0; i < n; i++)
{
    total += marks[i];
    if (marks[i] > max) { max = marks[i]; topStudent = names[i]; }
    if (marks[i] < min) { min = marks[i]; lowStudent = names[i]; }
}

Console.WriteLine($"
Class Average: {(double)total / n:F2}");
Console.WriteLine($"Highest: {topStudent} ({max})");
Console.WriteLine($"Lowest : {lowStudent} ({min})");
```

### Mini Project 2 – Simple Matrix Addition

```csharp
int[,] a = { { 1, 2 }, { 3, 4 } };
int[,] b = { { 5, 6 }, { 7, 8 } };
int[,] result = new int[2, 2];

for (int i = 0; i < 2; i++)
{
    for (int j = 0; j < 2; j++)
    {
        result[i, j] = a[i, j] + b[i, j];
    }
}
```

---

## 11. Session 6 Challenge

### Challenge: Classroom Seat Manager + String Analyzer

#### Part A — Seat Manager
Create a 5x5 classroom seating chart (2D array of strings) and allow the user to:
- Assign a student to a seat (row, column)
- Display the full seating chart
- Search for a student by name and show their seat
- Count how many seats are empty

#### Part B — String Analyzer
Create a method that takes a sentence and displays:
- Number of characters (excluding spaces)
- Number of words
- Number of vowels
- The sentence in reverse
- Whether it is a palindrome (ignoring spaces and case)

---

## 12. Exercises

### Beginner
1. Create an array of 10 integers and print them in reverse order.
2. Find the sum and average of an array of numbers entered by the user.
3. Count how many even and odd numbers are in an array.

### Intermediate
1. Write a program to find the second largest number in an array.
2. Reverse an array without using `Array.Reverse()`.
3. Merge two sorted arrays into one sorted array.
4. Count the frequency of each element in an array.

### Advanced
1. Work with a 3x3 matrix: calculate the sum of each row and each column.
2. Implement a simple search (linear search) method that returns the index.
3. Given a string, count the frequency of each character.

---

## 13. Session 6 Quiz

1. What is the index of the first element in an array?
2. What happens if you access an invalid index?
3. What is the difference between `for` and `foreach` when working with arrays?
4. How do you get the number of rows and columns in a 2D array?
5. What is a jagged array?
6. Are strings mutable in C#?
7. What does `Array.Sort()` do?
8. How do you find the length of a string?
9. What is the difference between `IndexOf` and `Contains`?
10. Why do we usually prefer `foreach` when we only need to read values?

---

## 14. Interview-Style Questions

- **Q1.** What is the difference between an array and a `List<T>`?
- **Q2.** Explain zero-based indexing.
- **Q3.** How are multidimensional arrays stored in memory?
- **Q4.** What is the time complexity of accessing an element in an array by index?
- **Q5.** Why are strings immutable in C#? What are the advantages?
- **Q6.** How would you reverse an array in-place?
- **Q7.** Difference between `Array.IndexOf` and writing your own linear search?