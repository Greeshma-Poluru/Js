/*conditional statements:
1.if-else
2.switch 

1.if (condition) {
    //statements (if condition true this executes)
} 
else if(condition){

}
.
.
.
else {
    
}*/

//hour
//if hour is between 6am and 12pm:good morning;
//if it is between 12pm and 6pm:good afternoon
//otherwise good evening

let hour=10;
if (hour>=6 && hour<12){
    console.log("good morning");
}
else if (hour>=12 && hour<18){
    console.log("good afternoon");
}
else{
    console.log("good evening");
}

//2.switch:with switch we can compare the value of a variable with bunch of other values .
let role='guest';
switch(role){
    case 'guest':
        console.log('guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    default:
        console.log('unkown user');
}