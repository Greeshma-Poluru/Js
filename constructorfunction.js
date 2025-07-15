// //constructor function:just like factory ffunction we are creating a function ,the job of this function is to create or construct object.
// for faactory functions,we use caamelnotation whereas for constructor functions the naming convention is pascal notation.where firstletter of every eord is capital.

// heree,insteaad of returning of an object here wwe are using a diff aapproaach to initialize aan object.
// in js,we have a keyword called "this" and this is aa reference tto the object that is executing this piece of Code. 

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw method");
    }
    //return this;
}
const cir=new Circle(1);
console.log(cir);

// what exaactly happening?here the new keeyword creates an empty object and this points to that empty object and set that radius property and draw method to that 
// empty oobject.finally,this new operator will return the new object from that function.so,we not need to add statement  return this; in the function.this 
// will happen under hood.


Difference between factory and constructor function?
 in Ff,we call an function and return the  new object from that function.
 in cf,we use aa new operator and instead of returning the object,we use the this keyword.



 DYNAMIC NATURE OF OBJECTS:
 in js,objects are dynamic in nature.once u create them,u can always  
   add  new properties,methods or removing existing ones to that object.
 
   ex:
   const cirrcle={
    radius:1
   }
   cirrcle1.color="yellow";//adding property
   cirrcle1.draw=function(){}//adding method
   delete cirrcle1.color;
   constantlog(cirrcle);

   Here,we use const but adding properties and all.here the thing is cirrcle iss constant.
   like if assign cirrcle object again like:
   cirrclee={};this throws errorr.here we are just changing the properties.
