// loops:for,while,do-while,for-in,for-Of
// for loop:
// syntax:
// for(intialExpression;Condition;increment){
//     statement
// }
//initialexpression-->intial variablethat refers to index,
// condition->to be checked with comaprision with initialexp and the loop executes until it is true
// i is a loop variable which is present in loop itself.
for(let i=0;i<5;i++){
    console.log("helloworld",i);
}
//displaying odd numbers
for(let i=1;i<=5;i++){
    if(i%2!==0) console.log(i);
}

//displaying odd numbers in revrse order
for(let i=5;i>0;i--){
    if(i%2!==0) console.log(i);
}


// while loop: we have to declare loop variable externally.
// syntax:
// while(condition){
//     //ststements

 let j=0;
 while(j<=5){
    if(j%2!==0) console.log(j);
    j++;
 }

 //dowhile:if the condition is false,it will execute atleast once
 let i=9;
 do{
    if(i%2!==0) console.log(i);
    i++;
 }
 while(i<=5);//only 9 is output.


 //infinite lops:
 for(let k=0;k>0;k++)
for(let l=0;l<5)
let x=0;
 while(x<5){
    console.log(x);
 }
                             ----->these all cretaes infinite loops
 while(true);

 do{
    console.log(x);
 }while(x<5);


 //