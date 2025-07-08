

/*operators:
we are using this operators with variables /constants to create expressions.and with this expressions we can implement logic and algorithms.
1.arithmetic operators:

let x=10;
let y=3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//we have another two operators increment and decrement.
//increment:
console.log(++x);//11,first increments 
console.log(x++);//11, not 12 bcoz first prints x then incremnets ,now again if i print x then it changes to 12
console.log(x);//12
//decrement
console.log(--x);//11
console.log(x--);//11
console.log(x);//10

2.assignment operator:
let z=3;//= is an assignment operator
z=z+3;
z*=3;//similar
z+=4;
z-=2;the arithematic operator (+,-,*,/,%) along with assignmnet operator are assignmnet operators.


3.comparison operator:
we used to compare the variable with something
i)relational
let v=1;
console.log(v>0);//true
console.log(v>=1);//true
console.log(v<1);//false
console.log(v<=1);//true

ii)equality
 console.log(v===1);//true
 console.log(v!==1);//false

we have strict equality operator and loose equality operator.
//strict equality(here both operands tupe and value should be same)
console.log(1===1);//true
console.log('1'===1);//false

//loose equality(here value should be same,if the type of operands are different then it will change the typeof right operad to type of left operand)
console.log(1==1);//true
console.log('1'==1);//true
console.log(true==1);//true

4.Ternary/conditional operators:
 //it produces the o/p based on condition
 lets say if a customer have 100 Points,they are gold customer otherwise silver customer.
 let points=110;
 lt type=points>100?'gold':'silver';//points>100 condition  checks,if its true produces first value otherwise second
 console.log(type);//gold

5.Logical Operators:we use this operators to make decision based on multiple conditions.
 logical and(&&):both operand are true then return true
logical origin(||):any one of operand true then returns true
logical Not(!)

console.log(true&&true);//true
console.log(false&&true);//false
console.log(true||true);//true
console.log(false||true);//true
console.log(!true);//false

//logical operators with non-boolenas
false||true-->true
false||'mosh'-->mosh
false||1--->1
the result of logical exp need not to be true or false ,that depends on the value of operand we have.
when our js engine tries to evaluate the exp,it looks at each operand,if the operand is not a true or false,it will try to intreret as truthy or falsy.
//falsy:not a boolean false,but somewhat
values in falsy:undefined,null,0,false,'',NaN(special value in js)so if we use anyof the value in logical exp they considered as falsy.
//truthy: anything that is not falsy
false||'mosh'-->mosh//mosh is not empty string so not falsy its truthy,then the value is immediately retrunewd.
false||12||122;//12 as soon as  we find an operand truthy that is returned,it doesnt matter whatver there is after it is ignored.

let usercolor=undefined;
let defaultcolor='blue';
let currentcolor=usercolor||defaultcolor;
console.log(currentcolor);//blue

let usercolor=red;
let defaultcolor='blue';
let currentcolor=usercolor||defaultcolor;
console.log(currentcolor);//red*/

let usercolor='red';
let defaultcolor=undefined;
let currentcolor=usercolor||defaultcolor;
console.log(currentcolor);

similarly ,if i use && like 1 &&undefined-->undefined falsy value will return 
undefined||undefined:undefined
1||0:1

6.bitwise operators;similar to logical operators but they work on individual bit of a Number.
console.log(1|2);//3
console.log(1&2);//0
