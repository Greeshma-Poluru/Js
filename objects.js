//Object oriented programming(oop):it is a style of programming where we see a program as a collection of objects that talk 
// to each other to perform some functionality.

//here we have circle object and it has some properties and a function.
// in Oops if we write a function inside a object we call that function as a method.so here more accurately
// instead of saying we are calling the draw function of circle object
// we say we are calling the draw method of circle object.
const circle={
    radius:1,
    location:{
        x:1,          
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log("draw method ")}//the value can be anything in js,here it is function..//method
}
circle.draw();


//now i want to create another same circle method,here we are duplicated the implementation of draw method.

const circle2={
    radius:1,
    location:{
        x:1,          
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log("draw method ")}
    }   
circle2.draw();

now here draw method is simple and we ahave single line of ConvolverNode.what if we have multiple lines of code and we have to duplicate it  in multiple places
and it is single method what if we have 10 diff methods.if we have single bug in any of that we have to fix it in multiple places.
so,if our objects have logic,we need to have a diff way of  creating objects.Then we use "FACTORY OR CONSTRUCTOR FUMCTIONS".
