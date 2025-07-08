we know how to assign values to variables but what values to assign to variables.
in js we have two types:
1.primitive /value types -->Strings,numbers,boolean,undefined,null
2.reference types -->object,Array,Function 

1.Primitive:

let name="greeshma";//string literal
let age=21;//number literal
let isAprooved="true";//boolean literal
let firstName;//IT IS UNDEFINED BUT we can also write let firstName="undefined";
let color="null";//it is used when we want to clear value of variable.


//javascript is a dynamic type language.
static type refers to we cant change the type of variable.if we declared it as string it is String.
but whereas in javascript we change the type of the variable at runtime.

we can check the type of variable using typeofmethod; typeof name :it shows String
now in console i give name=1;
now typeof name  gives Number;

therefore,type of the variables are determined at runtime based on the values that we assigned to them.

//typeof is akeyword,false,true,let,const,if
 typeof firstName :it gives undefined ,undefined is both type and value.
 
 typeof color:object

 