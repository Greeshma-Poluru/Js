/*
🔁 Summary:
Method	Purpose	Returns
reduce()	Combine all values to 1	Single value
map()	Transform each value	New array
filter()	Keep some values	New array
*/
let aarray=[1,2,3,4,5];
const square1=aarray.map((element)=>Math.pow(element,2));
const cube1=aarray.map((element)=>Math.pow(element,3));
const eveen=aarray.filter((element)=>element %2===0);
const eveen1=aarray.map((element)=>element %2===0);
const total = aarray.reduce((acc,element)=>acc*element);
const avg=aarray.reduce((acc,element,x,aarray)=>acc+element/aarray.length);
const maax=aarray.reduce((aacc,element)=>(aacc<element?element:aacc));
const min=aarray.reduce((aacc,element)=>(aacc>element?element:aacc));
console.log(square1);
console.log(cube1);
console.log(eveen);
console.log(eveen1);
console.log(total);
console.log(avg);
console.log(maax);
console.log(min);




/*
what happens if i dont specify initial val


ChatGPT said:
Great question! 👏
Let’s understand what happens if you don’t specify the initial value in .reduce() — and when it’s okay vs dangerous.

🔹 reduce() syntax:
js
Copy
Edit
array.reduce((acc, element) => {
  // logic
}, initialValue);
✅ The initialValue is optional, but it’s very important in some cases.

🔍 What happens if you DON'T specify it?
js
Copy
Edit
const array = [1, 2, 3, 4, 5];

const result = array.reduce((acc, el) => acc + el);
console.log(result); // 15 ✅
🔧 In this case:
acc will automatically take the first element (1).

el will start from the second element (2).

So:

text
Copy
Edit
acc = 1
Step 1: 1 + 2 = 3
Step 2: 3 + 3 = 6
Step 3: 6 + 4 = 10
Step 4: 10 + 5 = 15
✅ Works fine for sum or product where logic is simple.

❌ What problems can happen?
⚠️ Problem 1: Empty array
js
Copy
Edit
[].reduce((acc, el) => acc + el);
// ❌ TypeError: Reduce of empty array with no initial value
👉 It crashes! Because there's no first element to use as acc.

⚠️ Problem 2: Inaccurate logic
For example:

js
Copy
Edit
const avg = [1, 2, 3, 4, 5].reduce((acc, el, i, arr) => acc + el / arr.length);
🧠 You didn’t specify initial value, so:

acc = 1 (first element)

el = 2 (starts from second)

arr.length = 5

Now it adds:

ini
Copy
Edit
acc = 1
el = 2 → 1 + 2/5 = 1.4
el = 3 → 1.4 + 3/5 = 2
el = 4 → 2 + 4/5 = 2.8
el = 5 → 2.8 + 5/5 = 3.8 ❌
❌ Wrong average = 3.8
✅ Correct average should be 3

✅ Best Practice:
Always give initial value (like 0 for sum):
js
Copy
Edit
array.reduce((acc, el) => acc + el, 0);
This ensures:

It works with empty arrays

It starts from a known value

It avoids hidden logic bugs
*/