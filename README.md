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
```bash
# nvm ইন্সটল করা আছে কিনা চেক করুন
nvm -v  # Expected output: 1.2.2

# নির্দিষ্ট Node.js ভার্সন ইন্সটল করুন
nvm install 24.15.0

# এই প্রজেক্টের জন্য ওই ভার্সনটি ব্যবহার করুন
nvm use 24.15.0

## 🚀 ইন্সটলেশন এবং কনফিগুরেশন (Installation & Configuration)

আমি যেভাবে আমার পিসিতে TypeScript সেটআপ করেছি:

### ১. গ্লোবাল ইন্সটলেশন (Global Installation)
প্রথমে টার্মিনাল বা CMD থেকে TypeScript-কে গ্লোবালি ইন্সটল করেছি যাতে যেকোনো ফোল্ডার থেকে এটি ব্যবহার করা যায়:
```bash
npm install -g typescript

২. ভার্সন চেক (Check Version)
ইন্সটল ঠিকঠাক হয়েছে কিনা তা নিশ্চিত করতে নিচের কমান্ডটি দিয়েছি:

Bash
tsc -v
৩. প্রজেক্ট ইনিশিয়ালাইজেশন (Initialize TS Config)
প্রজেক্টের রুট ডিরেক্টরিতে tsconfig.json ফাইল তৈরি করার জন্য নিচের কমান্ডটি ব্যবহার করেছি:

Bash
tsc --init
৪. সোর্স ফোল্ডার এবং কম্পাইল (Source Folder & Compilation)
আমি আমার সব কোড src ফোল্ডারে রাখছি। কোড কম্পাইল করার জন্য আমি নিচের কমান্ডটি ব্যবহার করি:

Bash
# একবার কম্পাইল করার জন্য
tsc

# অথবা অটো-কম্পাইল (Watch Mode) চালু রাখতে
tsc -w

### 💡 প্রো-টিপ :
### ⚙️ কনফিগুরেশন (Best Practices Followed)
# TypeScript Learning Notes

আজ আমি TypeScript-এর কিছু basic কিন্তু খুব important concept শিখলাম। নিচে সবগুলো একসাথে neatly লিখে রাখলাম 👇

---

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

📌 Learning Progress: Step by step TypeScript fundamentals building 🚀


আমি আমার `tsconfig.json` ফাইলে নিচের কনফিগুরেশনগুলো সেট করেছি যাতে কোড আরও গোছানো থাকে:

- **rootDir**: `./src` (সব টাইপস্ক্রিপ্ট ফাইল এখানে থাকবে)
- **outDir**: `./dist` (কম্পাইল হওয়া জাভাস্ক্রিপ্ট ফাইলগুলো এখানে জমা হবে)

এর ফলে সোর্স কোড এবং আউটপুট কোড আলাদা থাকে, যা প্রজেক্ট মেইনটেইন করা সহজ করে।
