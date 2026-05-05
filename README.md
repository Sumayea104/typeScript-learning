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


আমি আমার `tsconfig.json` ফাইলে নিচের কনফিগুরেশনগুলো সেট করেছি যাতে কোড আরও গোছানো থাকে:

- **rootDir**: `./src` (সব টাইপস্ক্রিপ্ট ফাইল এখানে থাকবে)
- **outDir**: `./dist` (কম্পাইল হওয়া জাভাস্ক্রিপ্ট ফাইলগুলো এখানে জমা হবে)

এর ফলে সোর্স কোড এবং আউটপুট কোড আলাদা থাকে, যা প্রজেক্ট মেইনটেইন করা সহজ করে।




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

---

### 📌 Destructuring Example:

```ts
const [first, ...rest] = [10, 20, 30, 40];
```

👉 Output:

* `first = 10`
* `rest = [20, 30, 40]`

---

## 🔥 Difference (Important)

| Spread              | Rest               |
| ------------------- | ------------------ |
| Expand করে          | Collect করে        |
| Right side-এ use হয় | Left side-এ use হয় |
| Copy / merge        | Group values       |

---

## 🎯 Super Simple Line

👉 **Spread = ভাঙে (expand করে)**
👉 **Rest = জড়ো করে (collect করে)**

---

📌 Learning Progress: TypeScript fundamentals getting stronger 🚀
