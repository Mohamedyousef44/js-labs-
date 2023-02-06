
// part 1

/*class Shape {
    constructor(name  , sides , sideLength){
        this.name = name ;
        this.sides = sides ;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(this.sides * this.sideLength)
    }
}

let square = new Shape('square' , 4 , 5 );
square.calcPerimeter();

let triangle = new Shape('triangle ', 3 , 4 )
triangle.calcPerimeter();


// part 2

 class Square extends Shape{
    constructor(sideLength){
        super('square' , 4);
        this.sideLength = sideLength;
    }

    calcArea() {
        console.log(this.sideLength * this.sideLength)
    }
 }


 let sqr = new Square(6);
 sqr.calcArea();
 sqr.calcPerimeter();
 console.log(sqr.name)
 console.log(sqr.sides)*/




 // using constructor function 

 function Shape(name  , sides , sideLength){
        this.name = name ;
        this.sides = sides ;
        this.sideLength = sideLength;
 }

 Shape.prototype.calcPerimeter = function(){
        console.log(this.sides * this.sideLength);
 }

 let square = new Shape('square' , 4 , 5 );
square.calcPerimeter();

let triangle = new Shape('triangle ', 3 , 4 )
triangle.calcPerimeter();


// inheritance using constructor function 

function inherit(base , child){
    child.prototype = base.prototype;
    child.prototype.constructor = child;
}

function Square(sideLength){
    Shape.call(this,'square',4);
    this.sideLength = sideLength ;
    inherit(Shape,Square);
}

let sqr = new Square(6);
console.log(sqr.name)
console.log(sqr.sides)
console.log(sqr.sideLength)
sqr.calcPerimeter();

