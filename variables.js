//let is a keyword used to create variables(var is replaced by let after es6)
let name="greeshma";
console.log(name);

let age;
age=21;
console.log(age);

//naming conventions of variable
1.it shouldnt start with Number(1name)
2.variable name cannot be reserved Word
3.it should be meanigful
4.case-sensitive
5.camelnotation 
6.cannot use space or hypen if there are multiple Words*/

let firstName="greesh";//correct way
//let first name;//wrong


//we can declare mutliple variables in a single but its not the best practice.
let first="greesh",lastName="poluru";

//we can reassign the values of variables.
let age=20;
age=21;
console.log(age);//21 it prints


//Constant keyword
const name="greeshma";
name="poluru";
console.log(name);//showing error because if we assigned a value using const keyword we cant change the value.

So,if u dont want to reassign use "const" 
if u want to reassign use "let"