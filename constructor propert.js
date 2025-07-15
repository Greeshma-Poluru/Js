 What is the constructor property?
Every object in JavaScript has a special property called constructor. This property points to the function that created the object.

Example with Custom Object
Let’s say we have a function that creates a circle object:
function Circle(radius) {
  return {
    radius: radius
  };
}

let another = Circle(5);
console.log(another.constructor);


Here:
- We used the Circle function to build the another object.
- So another.constructor points back to the Circle function.
This tells us: "Hey, I was created by the Circle function."

🧬 Example with Object Literal ({ })
Now let’s try this:
let circle = {};
console.log(circle.constructor);


This prints something like:
ƒ Object() { [native code] }


- The function starts with a capital O, showing it's the built-in Object constructor.
- Even though we wrote {}, behind the scenes JavaScript translates that to new Object().
💡 So when you write object literal syntax ({}), it's just a shortcut. JavaScript secretly uses the Object constructor.

simillarly we have constructors for String,number,Boolean.
new String(),new Boolean(),new number().
In JavaScript we have

a few other built in constructors, for example, we have

string for creating strings, but quite often

we use string literals. So, single code,

or double code, or back tick. Using these literals

is cleaner and simpler than using the constructor.

We also have boolean, but again we don't use this, we

either use true or false. So we refer to these as

boolean literals. We also have number,

but instead we use number literals, like 1, 2,

3, whatever. So this is what I want you to take away,

Every object has a constructor property, and that references

a function that was used to create that object.

🛍️ Final Takeaway
- Every JavaScript object has a .constructor property.
- That property references the function used to create the object.
- You can use this to learn where your object came from—whether it's custom (like your Circle) or built-in (like Object, String, etc).
