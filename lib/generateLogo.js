class Shapes {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
        // this.shape = shape
    }
}

class Triangle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = 'points="100,10 175,150 20,150"'
        this.shape = '<polygon'
    }
}

class Circle extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = 'cx="100" cy="100" r="100"'
        this.shape = '<circle'
    }
}

class Square extends Shapes {
    constructor(text, color, background) {
        super(text, color, background)
        this.points = 'width="100" height="100"'
        this.shape = '<rect'
    }
}

function generateLogo(data) {
    if (data.shape === 'triangle') {
        const triangle = new Triangle('data.text', 'data.color', 'data.background', 'this.points');

        return `<svg version="1.1"
        baseprofile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:ev="http://www.w3.org/2001/xml-events" 
        width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        ${triangle.shape} ${triangle.points} style="fill:${data.background}" />
        <text class="text" x="75" y="110" fill='${data.color}'>
        ${data.text}
        </text>
        </svg>`
    } else if (data.shape === 'circle') {
        const circle = new Circle('data.text', 'data.color', 'data.background','this.points');

        return `<svg version="1.1"
        baseprofile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:ev="http://www.w3.org/2001/xml-events" 
        width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        ${circle.shape} ${circle.points} style="fill:${data.background}" />
        <text class="text" x="25" y="60" fill='${data.color}'>
        ${data.text}
        </text>
        </svg>`
    } else if (data.shape === 'square') {
        const square = new Square('data.text', 'data.color', 'data.background', 'this.points')

        return `<svg version="1.1"
        baseprofile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:ev="http://www.w3.org/2001/xml-events" 
        width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        ${square.shape} ${square.points} style="fill:${data.background}" />
        <text class="text" x="25" y="60" fill='${data.color}'>
        ${data.text}
        </text>
        </svg>`
    }

}

module.exports = generateLogo;