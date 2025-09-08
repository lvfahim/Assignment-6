1. What is the difference between var, let, and const?

Ans:
var:var ফাংশন-স্কোপড, ব্লকের বাইরে থেকেও অ্যাক্সেস করা যায়।এটি চাইলে আমরা ডিক্লেয়ার করার আগেও ব্যবহার করতে পারি।

let:let ব্লক-স্কোপড, বাইরে থেকে অ্যাক্সেস করা যায় না।একই স্কোপে আবার ডিক্লেয়ার করা যায় না, তবে নতুন ভ্যালু দেওয়া যায়।

const:হোইস্ট হয়, কিন্তু ডিক্লেয়ার করার আগে ব্যবহার করা যাবে না।তবে object/array হলে ভেতরের ডাটা পরিবর্তন করা যায়, শুধু পুরো ভ্যারিয়েবল নতুন করে সেট করা যাবে না।


2. What is the difference between map(), forEach(), and filter()?

Ans:
map():যেটা দিয়ে কোনো array এর প্রতিটি item এর উপর একটা ফাংশন চালিয়ে নতুন একটা array রিটার্ন করতে পারেন।

forEach():যেটা দিয়ে কোনো array এর প্রতিটি item এর উপর একটা ফাংশন চালায় কিন্তু কোনো array রিটার্ন করে না।

fillter():যেটা দিয়ে শর্ত অনুযায়ী array থেকে কিছু আইটেম ফিল্টার করে নতুন একটা array বানাতে পারবেন।

3. What are arrow functions in ES6?

Ans:
আমরা যখন আগে ফাংশন লিখতাম এইভাবে 
function add(a, b) {
  return a + b;
}

ES6 ব্যবহার করার পর আমরা ফাংশন লেখি এখন এইভাবে
const add = (a, b) => a + b;

এরপরে আমাদের কোড ছোট হয় এবং আমাদের কোড এক লাইনের মধ্যে লেখা যায় ,আবার তার ভ্যালু রিটার্ন করা যায় ওভাবে


4. How does destructuring assignment work in ES6?

Ans:
যেটা দিয়ে আপনি array বা object এর ভেতরের ভ্যালু আলাদা ভ্যারিয়েবলে খুব সহজে বের করে আনতে পারেন।
আমরা আগে যেভাবে কোড লিখতাম
const numbers = [10, 20, 30];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

console.log(a, b, c);

আর এখন যেভাবে কোড লেখা যায় ES6 এর মাধ্যমে

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a, b, c);

মানে, অনেক লম্বা কোড না লিখে ছোট করে ভ্যালু বের করার শর্টকাট।

5.  Explain template literals in ES6. How are they different from string concatenation?

Ans:
পুরনো সময়ের স্ট্রিং (concatenation) এ আমরা ব্যবহার করতাম + সাইন ,আবার কোন ভেরিয়েবল ভেরিয়েবলের মান ডিয়ার করতে অনেক সমস্যা হবে 

কিন্তু,
এখন Template Literals দিয়ে (ES6)
ব্যাকটিকস ব্যবহার হয়: ``
ভেরিয়েবল বা এক্সপ্রেশন ${} এর ভিতরে লেখা যায়
কোড অনেক সুন্দর এবং পড়তে সহজ।
