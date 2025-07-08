// we use for,while,dowhile to iterate over a number of times but we use for-in
//  and for-of to iterate over properties of Object or elements in an Array.

 const person={
    name:'greesh',
    age:21
 }
 for (let key in person){
    console.log(key,person[key]);
 }

 //similarly for arrays
 const colors=['red','green','blue']
 for(let index in colors){
    console.log(colors[index]);//we can do better with for-of 
 }