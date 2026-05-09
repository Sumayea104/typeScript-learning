# 📘 TypeScript Learning Journey

স্বাগতম! এই রিপোজিটরিটিতে আমি আমার **TypeScript** শেখার পুরো যাত্রাটি ডকুমেন্ট করছি। এখানে বেসিক থেকে শুরু করে অ্যাডভান্সড এবং অবজেক্ট-ওরিয়েন্টেড (OOP) কনসেপ্টগুলো থাকবে।

---

## 🎯 শেখার উদ্দেশ্য (Learning Goals)

- [ ] **Basic TypeScript**: Type annotations, Functions, Arrays, and Enums.
- [ ] **Advanced TypeScript**: Union Types, Generics, Type Guards, and Utility Types.
- [ ] **Object-Oriented TypeScript**: Classes, Interfaces, Inheritance, and Access Modifiers.
- [ ] **Backend Integration**: Using TypeScript with Node.js and Express.

## 🛠 প্রজেক্ট সেটআপ (Project Setup)

এই প্রজেক্টটি চালানোর জন্য **Node.js** এর নির্দিষ্ট ভার্সন ব্যবহার করা হয়েছে। আমরা ভার্সন কন্ট্রোল করার জন্য `nvm` ব্যবহার করছি।

### ১. Node.js এনভায়রনমেন্ট সেটআপ:
প্রজেক্টের সঠিক ভার্সন নিশ্চিত করতে নিচের কমান্ডগুলো অনুসরণ করুন:

## nvm ইন্সটল করা আছে কিনা চেক করুন
nvm -v  # Expected output: 1.2.2

# নির্দিষ্ট Node.js ভার্সন ইন্সটল করুন
nvm install 24.15.0

# এই প্রজেক্টের জন্য ওই ভার্সনটি ব্যবহার করুন
nvm use 24.15.0

## 🚀 ইন্সটলেশন এবং কনফিগুরেশন (Installation & Configuration)

আমি যেভাবে আমার পিসিতে TypeScript সেটআপ করেছি:

১. গ্লোবাল ইন্সটলেশন (Global Installation)
প্রথমে টার্মিনাল বা CMD থেকে TypeScript-কে গ্লোবালি ইন্সটল করেছি যাতে যেকোনো ফোল্ডার থেকে এটি ব্যবহার করা যায়:

npm install -g typescript

২. ভার্সন চেক (Check Version)
ইন্সটল ঠিকঠাক হয়েছে কিনা তা নিশ্চিত করতে নিচের কমান্ডটি দিয়েছি:

tsc -v


৩. প্রজেক্ট ইনিশিয়ালাইজেশন (Initialize TS Config)
প্রজেক্টের রুট ডিরেক্টরিতে tsconfig.json ফাইল তৈরি করার জন্য নিচের কমান্ডটি ব্যবহার করেছি:

tsc --init


৪. সোর্স ফোল্ডার এবং কম্পাইল (Source Folder & Compilation)
আমি আমার সব কোড src ফোল্ডারে রাখছি। কোড কম্পাইল করার জন্য আমি নিচের কমান্ডটি ব্যবহার করি:

# একবার কম্পাইল করার জন্য
tsc

# অথবা অটো-কম্পাইল (Watch Mode) চালু রাখতে
tsc -w

## 🔹 Primitive Data Types

Primitive data types হলো basic ধরনের data, যেগুলো সরাসরি value ধরে।

### Examples:

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `symbol`
* `bigint`

```ts
let name: string = "Sumayea";
let age: number = 25;
let isStudent: boolean = true;
```

👉 এগুলো immutable (change করলে নতুন value তৈরি হয়)

---

## 🔹 Non-Primitive Data Types

Non-primitive data types complex structure তৈরি করতে ব্যবহার হয়।

### Examples:

* `array`
* `object`

```ts
let numbers: number[] = [1, 2, 3];

let person: { name: string; age: number } = {
  name: "Sumayea",
  age: 25
};
```

👉 এগুলো mutable (change করা যায়)

---

## 🔹 Object

Object হলো key-value pair এর collection।

```ts
const user = {
  name: "Sumayea",
  age: 25,
  isActive: true
};
```

👉 Real-life data represent করার জন্য object সবচেয়ে বেশি use হয়

---

## 🔹 Function

Function হলো reusable block of code, যেটা নির্দিষ্ট কাজ করে।

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
```

👉 TypeScript-এ function এর parameter এবং return type define করা যায়

---

## 🔹 Tuple

Tuple হলো fixed length array যেখানে প্রতিটি index-এর data type আগে থেকেই নির্ধারিত থাকে।

```ts
let userTuple: [string, number] = ["Sumayea", 25];
```

👉 Order maintain করা খুব important

---

## 🔹 Coordinate (Tuple Example)

Tuple real-life use case: coordinate system

```ts
let point: [number, number] = [10, 20];
```

👉 x = 10, y = 20

---

## 🔹 Map

`map()` হলো array method, যা প্রতিটি element-এর উপর operation চালিয়ে নতুন array return করে

```ts
const numbersArr = [1, 2, 3];

const doubled = numbersArr.map((num) => num * 2);
```

👉 Output: `[2, 4, 6]`
👉 Original array change হয় না

---

## 🔹 Callback Function

Callback function হলো এমন function, যেটা অন্য function-এর argument হিসেবে pass করা হয়

```ts
function processNumber(num: number, callback: (n: number) => number) {
  return callback(num);
}

const resultCallback = processNumber(5, (n) => n * 2);
```

👉 `(n) => n * 2` হলো callback

---

## 🎯 Summary

* Primitive → simple value
* Non-primitive → complex structure
* Object → key-value data
* Function → reusable logic
* Tuple → fixed structure array
* Coordinate → tuple use case
* Map → array transform
* Callback → function as argument

---

# TypeScript Learning Notes (Spread & Rest Operator)


## 🔹 Spread Operator (`...`)

👉 Existing array বা object **expand / copy / merge** করার জন্য use হয়

### 📌 Array Example:

```ts
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```

👉 Output: `[1, 2, 3, 4, 5]`

---

### 📌 Object Example:

```ts
const user = { name: "Sumayea" };
const updatedUser = { ...user, age: 25 };
```

👉 Output: `{ name: "Sumayea", age: 25 }`

---

👉 **Use case:**

* Copy array/object
* Merge data
* Immutable update

---

## 🔹 Rest Operator (`...`)

👉 Multiple value collect করে **একটা array-তে রাখে**

### 📌 Function Example:

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3, 4);
```

👉 এখানে:

* `...numbers` → সব argument একসাথে array বানাচ্ছে

--

### 📌 Destructuring Example:
Destructuring ব্যবহার করা হয় Array বা Object থেকে খুব সহজভাবে data বের করার জন্য। এতে আলাদা করে index বা property লিখতে হয় না, ফলে code cleaner এবং readable হয়।

```ts
const [first, ...rest] = [10, 20, 30, 40];
```

👉 Output:

* `first = 10`
* `rest = [20, 30, 40]`


👉 Explanation:

first প্রথম value নিবে
...rest বাকি সব value array আকারে নিবে

👉 Output:

first = 10
rest = [20, 30, 40]
---
✅ Object Destructuring Example:
```ts
const person = {
  name: "Sumayea",
  age: 24,
};

const { name, age } = person;
```
👉 এখানে object থেকে name এবং age সরাসরি বের করা হয়েছে।

📌 Learning Progress: Writing cleaner and shorter code 🚀
---
📌 Type Alias

Type Alias ব্যবহার করে আমরা নিজের custom type তৈরি করতে পারি। একই type বারবার লিখতে হয় না, তাই code maintain করা সহজ হয়।

```ts
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};
```
👉 এখন এই type ব্যবহার করে object তৈরি করা যাবে।
```ts
const user1: User = {
  name: "Sumayea",
  age: 24,
  isStudent: true,
};
```
👉 সুবিধা:

Code reusable হয়
Type safety বাড়ে
বড় project এ manage করা সহজ হয়

📌 Learning Progress: Building reusable and type-safe structures ✨
---
📌 Ternary Operator

Ternary Operator হলো if...else এর short form। ছোট condition check করার জন্য এটি বেশি ব্যবহার করা হয়।

```ts
condition ? trueValue : falseValue;
```
Example
```ts
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
```
👉 Explanation:

যদি condition true হয় → "Adult"
না হলে → "Minor"

👉 Output:

```ts
Adult
```
✅ একই কাজ if...else দিয়ে:
```ts
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```
📌 Learning Progress: Writing smarter conditional logic ⚡
---
📌 Nullish Coalescing Operator (??)

যখন কোনো value null বা undefined হয় তখন default value সেট করার জন্য ?? ব্যবহার করা হয়।
```ts
const username = null;
const displayName = username ?? "Guest User";
```
👉 Explanation:

username এর value null
তাই "Guest User" return করবে

👉 Output:

```ts
Guest User
```
Difference Between || and ??
```ts
const value = 0;

console.log(value || 100);
console.log(value ?? 100);
```
👉 Output:
```ts
100
0
```
👉 কারণ:

|| falsy value check করে (0, false, "")
?? শুধু null এবং undefined check করে

📌 Learning Progress: Handling default values more accurately 🛡️
---
📌 Optional Chaining (?.)

Nested object এর কোনো property না থাকলেও যাতে error না আসে, তার জন্য Optional Chaining ব্যবহার করা হয়।
```ts
const user = {
  profile: {
    city: "Dhaka",
  },
};

console.log(user?.profile?.city);
```
👉 Output:
```ts
Dhaka
```
Without Optional Chaining
```ts
console.log(user.profile.city);
```
👉 এখানে error হবে না, শুধু undefined return করবে।

📌 Learning Progress: Preventing runtime errors like a pro 🔥
---
📌 Type Assertion

Type Assertion ব্যবহার করে TypeScript কে manually বলে দেওয়া হয় কোন value কোন type হিসেবে treat হবে।
```ts
let data: unknown = "TypeScript";
```
👉 Explanation:

as string দিয়ে TypeScript কে বলা হয়েছে এটি string type

👉 Output:
```ts
console.log(user.profile.city);
```
📌 Nullable Type

Nullable type ব্যবহার করা হয় যখন কোনো variable এর value null হতে পারে।

অনেক সময় data শুরুতে available থাকে না, তখন null ব্যবহার করা হয়।
```ts
const searchName: string | null = null;
```
👉 এখানে searchName হয় string হবে, না হলে null হবে।

Example
```ts
const getSearchName = (value: string | null) => {
  if (value) {
    console.log(value.toUpperCase());
  } else {
    console.log("No Search Value");
  }
};

getSearchName(null);
```
👉 Output:
```ts
No Search Value
```
👉 Explanation:

যদি value থাকে তাহলে uppercase করবে
না থাকলে "No Search Value" দেখাবে

📌 Learning Progress: Handling empty or missing values safely 🛡️
---
📌 Unknown Type

unknown হলো safer version of any।

যখন কোনো value এর type আগে থেকে জানা থাকে না তখন unknown ব্যবহার করা হয়।
```ts
let data: unknown;
```
👉 unknown type এ value assign করা যায়, কিন্তু type check ছাড়া ব্যবহার করা যায় না।
Example
```ts
const checkValue = (value: unknown) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
};

checkValue("typescript");
```
👉 Output:
```ts
TYPESCRIPT
```
👉 Explanation:

প্রথমে typeof দিয়ে check করা হয়েছে
তারপর string method ব্যবহার করা হয়েছে
Why unknown Better Than any
❌ Using any

```ts
let value: any = 10;

value.toUpperCase();
```

👉 এতে runtime error হতে পারে।

✅ Using unknown
```ts
let value: unknown = 10;

if (typeof value === "string") {
  value.toUpperCase();
}
```
👉 এখানে safe way তে type check করা হয়েছে।

📌 Learning Progress: Writing safer and more reliable TypeScript code 🚀
---
📌 Never Type

never type এমন function এর জন্য ব্যবহার করা হয় যেগুলো কখনো কিছু return করে না।

সাধারণত দুই ক্ষেত্রে never ব্যবহার হয়:

Function error throw করলে
Infinite loop চললে
Example: Throwing Error
```ts
const throwError = (msg: string): never => {
  throw new Error(msg);
};
```
👉 Explanation:

এই function কখনো কোনো value return করবে না।
এটি সরাসরি error throw করবে।

Example: Infinite Loop
```ts
const infiniteLoop = (): never => {
  while (true) {}
};

```
👉 এখানে loop কখনো শেষ হবে না, তাই function return করবে না।

Difference Between void and never
| Type    | Meaning                  |
| ------- | ------------------------ |
| `void`  | কিছু return করে না       |
| `never` | কখনোই function শেষ হয় না |


Example

```ts
const noReturn = (): void => {
  console.log("Hello");
};
```
👉 Function run হবে কিন্তু কিছু return করবে না।

```ts
const crash = (): never => {
  throw new Error("Error!");
```
👉 Function execution এখানেই বন্ধ হয়ে যাবে।

📌 Learning Progress: Understanding advanced TypeScript types like a pro 🔥
---




