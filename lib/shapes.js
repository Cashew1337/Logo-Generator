const fs = require('fs')

class Shapes {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
        this.shape = []
    }
    render(){
        fs.writeFile('logo.svg', `${this.shape}`)
    }
}

class Triangle extends Shapes {
    constructor(text, color, background, points)
}

class Circle extends Shapes {
    constructor(text, color, background, points)
}

class Rectangle extends Shapes {
    constructor(text, color, background, points)
}

