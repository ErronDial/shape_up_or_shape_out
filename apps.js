
const shapeContainer = document.getElementById("shape-container"),
rectangleBtn = document.getElementById("create-retangle-btn"),
squareBtn = document.getElementById('create-square-btn'),
circleBtn = document.getElementById('create-circle-btn'),
triangleBtn = document.getElementById('create-triangle-btn');

//rectangleBtn.addEventListener("click", () => new Rectangle(document.getElementById("rec-weigth").value,document.getElementById("rec-hieght").value));

class Shape {
    constructor() {
    	this.shape = document.createElement('div');
        this.shape.style.position = 'absolute';
        
    }
    
    addToDOM() {
        this.shape.style.top = (Math.floor(Math.random() * 600))+'px';
        this.shape.style.left = ((Math.floor(Math.random() * 600)) - this.shape.width/2) +'px';
        shapeContainer.appendChild(this.shape);
      
    }
    
    getArea() {}
    getDimensions () {}
    getName () {}
    toString () {
        return this.getName() + ": " + this.getDimensions() + ", Area=" + this.getArea();
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.shape.style.height = height + "px";
        this.shape.style.width = width + "px";
        this.shape.style.backgroundColor = "green";
       
        this.addToDOM();
    }

    getArea(){
        return this.width * this.height;
    }
    
    getDimensions() {
        return "Height=" + this.height + ", Width=" + this.width;
    }
    
    getName() {
        return "Rectangle";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.shape.style.backgroundColor = "purple";
        this.shape.style.width = (radius * 2 ) + "px";
        this.shape.style.height = (radius * 2 ) + "px";
        this.shape.style.borderRadius = "50%";

        this.addToDOM();
        
    }

    getArea(){
        return 3.14 * this.radius * this.radius ;
    }
    
    getDimensions() {
        return "Radius=" + this.radius;
    }

    getName() {
        return "Circle";
    }
}   

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
        this.shape.style.height = side + "px";
        this.shape.style.width = side + "px";
        this.shape.style.backgroundColor = "red"
      
        this.addToDOM();
    }

    getArea(){
        return this.side * this.side ;
    }
    
    getDimensions() {
        return "side=" + this.side;
    }

    getName() {
        return "Square";
    }
}   

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
        this.shape.style.height = 0;
        this.shape.style.width = 0;
        this.shape.style.borderBottom = base + "px solid yellow";
        this.shape.style.borderLeft = height + "px solid transparent";
        this.shape.style.borderRight = height + "px solid transparent";
       
        this.addToDOM();
    }

    getArea(){
        return 0.5 * this.base * this.height;
    }
    
    getDimensions() {
        return "Height=" + this.height + ", Base=" + this.base;
    }
    
    getName() {
        return "Triangle";
    }
}


function addShape (s) {
    $('#output').append(s.toString() + "<br>");
}

$(document).ready (function() {
    $('#create-rectangle-btn').click(function (){
        let h = $('#rectangle-height').val();
        let w = $('#rectangle-width').val();
        let r = new Rectangle (w,h);
        addShape(r);
    });

    $('#create-circle-btn').click(function (){
        let r = $('#circle-radius').val();
        let c = new Circle (r);
        addShape(c);
    });

    $('#create-square-btn').click(function (){
        let h = $('#square-height').val();
        let s = new Square (h);
        addShape(s);
    });

    $('#create-triangle-btn').click(function (){
        let h = $('#triangle-height').val();
        let b = $('#triangle-base').val();
        let t = new Triangle (b,h);
        addShape(t);
    });

    $('#random-button').click(function(){
        let width = (Math.floor(Math.random() * 500));
        let height = (Math.floor(Math.random() * 500));
    	// random width && random height
      	// random shape
          const possibilities = ['Triangle', 'Circle','Square','Rectangle'];
          let index = Math.floor(Math.random() * (possibilities.length-1));
          let shapeName = possibilities[index];
          const classes = {
            Triangle,
            Circle,
            Square,
            Rectangle
        }
          let t = new classes[shapeName](width,height)
          addShape(t);
          
          
      	// pick random option
      	
        // addShape()
    })



});
