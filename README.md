# Understanding Key TypeScript Types

> A comprehensive guide to essential TypeScript data types and type operations

## 📋 Table of Contents
- [Question No. 3: Core Data Types](#question-no-3-core-data-types)
  - [`any` Data Type](#any-data-type)
  - [`unknown` Data Type](#unknown-data-type)
  - [`never` Data Type](#never-data-type)
- [Question No. 7: Type Operations](#question-no-7-type-operations)
  - [Union Types (`|`)](#1-union-types--choosing-one-type-or-another)
  - [Intersection Types (`&`)](#2-intersection-types--combining-multiple-types)

---

## Question No. 3: Core Data Types

### `any` Data Type

When you use `any`, you're telling TypeScript to essentially ignore type checking for that variable. It can store *any* type of data (string, number, object, etc.). While it allows flexibility, it bypasses TypeScript's core benefit of type safety. We might use it when we receive unknown data and then use **type assertion** to define its expected type later.

### `unknown` Data Type

`unknown` means we don't know the data type at compile time, but we **will** figure it out at runtime. Unlike `any`, TypeScript requires you to narrow down the type (e.g., using a `typeof` type guard) before you can perform operations on it, ensuring type safety.

### `never` Data Type

The `never` type indicates a value that will *never* occur. It's typically used:
* As the return type for functions that *always* throw an error (i.e., never complete execution).
* For exhaustive checking in `switch` statements, to ensure all possible cases are handled.

---

## Question No. 7: Type Operations

### 1. Union Types (`|`): Choosing One Type or Another

Union types allow a variable to hold multiple possible types. You use the pipe symbol (`|`).

**Example:**

```typescript
type ID = string | number; // An ID can be a string OR a number

function printID(id: ID) {
  if (typeof id === "string") {
    console.log(`ID as a string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID as a number: ${id.toFixed(2)}`);
  }
}

printID("abc123"); // Output: ID as a string: ABC123
printID(456);     // Output: ID as a number: 456.00
```

### 2. Intersection Types (`&`): Combining Multiple Types

Intersection types merge multiple types into one, meaning an object must satisfy **all** included types. You use the ampersand symbol (`&`).

**Example:**

```typescript
type User = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type StaffMember = User & Employee; // Must have properties from both User AND Employee

const staff: StaffMember = {
  name: "Shahedul",
  age: 25,
  employeeId: 101,
  department: "Engineering",
};

console.log(staff);
```

---

## 🚀 Key Takeaways

- **`any`**: Maximum flexibility, minimum type safety
- **`unknown`**: Safe unknown type that requires type narrowing
- **`never`**: Represents values that never occur
- **Union Types (`|`)**: Choose between multiple possible types
- **Intersection Types (`&`)**: Combine multiple types into one

## 📚 Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

*Happy coding with TypeScript! 🎉*