/*2.Reference type:

 object:
 when we are dealing with multiple related variables ,we can put them inside a object.
 forex: name,age both refers to a person,so instead of declaring two variables we can declare the person object.so instead of referencing two 
 different variable we can just reference the person object.

 Declaration:
   we use here key-value pairs,like key is the property and value is the value of that property.
let person={
  name:'greesh',
  age:21
};
console.log(person);//it displays {name:"greesh",age:21}


now we if want to change the values we have 2 ways
1.dot notation:
  person.name="viggu";//now the value have changes ,u can read the values by using this dot notation
  console.log(person.name);//it shows viggu

2.bracket notation
    person['name']="kalpana";
    console.log(person['name']);

   // u can also change like:
    let selectedkey="name";
    console.log(person[selectedkey]);*/


/*Array: array is a data structure that is used to store a list of items.
whenever we want to store list of objects,like list of items in cart EventCounts..we use arrays.

[]:array literal
//let selectedcolors=[];//empty array*/

let selectedcolors=['red','green'];//array creation
console.log(selectedcolors);//displays red and green in array format
console.log(selectedcolors[0]);//displays red
/* it has index positions starting from 0.
*as we said js is DynamicsCompressorNode,arrays are also dynamic if.e.. 
we change the length  of array and typeof objects in array at runtime.

*we can have diff types in array*/

selectedcolors[2]=1;//accepted


/*we we give  typeof selectedcolors:object ;
so an array is an object in js.

so,when i give dotnotation to access properties because technically array is an object.
console.log(selectedcolors.),//when i give dot it shows all the properties defined in arrays in js like
every,fill,filter,find,findindex....so every time we declare an array with square brackets that array will automatically receive these properties.
we didnt explicitly define them,they are just inherited.

lets see on of the property:*/
console.log(selectedcolors.length);//3

/*Functions:
functions are the fundamental building blocks in js.
a function is basically a set of statements that performs a task or calculates a Value.

we declare a function using function keyword.
syntax:
function functionname(){
  //body where we write logic and statements to be executes.
}*/

// when we want to execute the function,we call it by--> functionname();

function greet(){
  console.log("hello greeshma");
}
greet();


/*our functions can have inputs.*/

function greet1(name){//whereas here name is a parameter that we are passing at time of declaration.
  console.log('hello'+name);
}
greet1('john');//here john is an argument
greet1('mary');

/* we can pass multiple inputs.*/

function greet2(name,lastName){
  console.log('hello'+name+' '+lastName);
}
greet2('john','peter');

//what if we dont pass any one of the argument.
function greet3(name,lastName){
  console.log('hello'+name+' '+lastName);//it displays hello john undefined,because default value of a variable in js is undefined.
}
greet3('john');


//another example for calcualting
function square(number){
  return number*number;
}

console.log(square(2));//4//here first square(number) calls and then return value then console.log prints
//or
let result=square(2);
console.log(result);//4


// note:console.log() is also a function called logfunction which is defined somewhere .we can pass like  an argument string like that or any expression which can be calling to another function like square(2).
