//Factory functions produce objects.
// creating a function and call create circle.
function create_circle() {
    const circle={
    radius:1,
    location:{
        x:1,          
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log("draw method ");}
    
}
return circle;
}

//now we need to return it like this,but we dont really need this circle constant defined because we are not going to reference it anywhere,
// we only want to return it
// now we will make this code shorter by removing the circle constant and simply returning this Object.so whenever we call the create_circle 
// function we will get a circle Object.


function create_circle() {
    return{
    radius:1,
    location:{
        x:1,          
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log("draw method ");}
    
}}

// however we have hardcoded these values Headers,so every circle that is created by this will have radius one,now if we want bigger circle then how?
// so then pass radius as the parameter.

function create_circle(radius){
    return{
    radius,//so we should write like radius:radius ,in modren js if key and value are same we can write like this.
    // draw:function(){
    //     console.log("draw method ")}we can also write it in simpler syntax.
    draw(){
        console.log("draw method ");
    }
    }
}//so now we have a factory function,we can  simply call this
    //to create a circle object.
const circle1=create_circle(1);
console.log(circle1);
console.log(circle1.draw());

const circle2=create_circle(10);
console.log(circle2);

//here we have defined our logic in one place.so we can call this function with different values or different arguments,
// we get diff circle objects but we have defined the draw method only in one place.so any BigUint64Array,we need to fix it only in one place.

// therfore,factory functions are not the only way to create objects.we can also use constrructior functions.

function createcircle1(radius,x,y,isVisible){
   return{radius,
    loc:{
        x,y
    },
    isVisible,
    draw1(){
        console.log("draw1");
    }
}
}
const circle3=createcircle1(1,1,1,true);
console.log(circle3);

