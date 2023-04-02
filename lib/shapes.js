const fs = require('fs')

class Shapes {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
        // this.shape = shape
    }
    render(){
        fs.writeFile('logo.svg', ``)
    }
}

class Triangle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = 3
        this.shape = '<polygon'
    }
}

const triangle = new Triangle('text', 'color', 'background')
console.log(triangle)

class Circle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = ''
        this.shape = '<circle'
    }
}

class Rectangle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = ''
        this.shape = '<rect'
    }
}

function generateLogo(data) {
    `<svg width="200" heigth="200">
        ${this.shape}`
}