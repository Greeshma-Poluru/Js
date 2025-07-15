//swapping
let a=2,b=1;
[a,b]=[b,a];
console.log(a,b);

//swapping elemeents in arraay
let numbers=[10,20,30,40,50];
[numbers[0],numbers[4]]=[numbers[4],numbers[0]];
console.log(numbers);

//assigning elements in array to variaablees

 let number=[10,20,30,40,50];
 const[firstnumber,secondnumber]=number;
 console.log(firstnumber,secondnumber);

 //for object
 const person={
    name:"greeshma",
    age:21,
    job:"ias"
 }

 const person1={
    name1:"varun",
    age1:22
 }

 let{name,age,job}=person;
 console.log(name,age,job);

 let{name1,age1,job1="ips"}=person1;
 console.log(name1,age1,job1);

 //using object vaariables in function

 function hello({name,age,job}){
     console.log(name,age,job);
 }
 hello(person);