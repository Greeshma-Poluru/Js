function circle(radius){
    this.radius=radius;
}
circle.call({},1);
console.log(circle);