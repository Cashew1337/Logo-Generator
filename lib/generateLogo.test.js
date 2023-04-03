const generateLogo = require('./generateLogo')
const Triangle = require('./generateLogo')
const Circle = require('./generateLogo')
const Square = require('./generateLogo')

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Triangle class', () => {
            const triangle = new Triangle('triangle');

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('Generate Triangle', () => {
        it('Should list proper points and svg of Triangle class', () => {
            const data = {
                shape: 'triangle',
                text: 'ABC',
                background: 'black',
                color: 'red'
            };
            const triangle = new Triangle(data);

            expect(generateLogo(data)).toEqual(`<svg width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        <polygon points="100,10 175,150 20,150" fill="black" />
        <text class="text" x="75" y="110" fill='red'>
        ABC
        </text>`);
        });
    });
});

describe('Circle', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Circle class', () => {
            const circle = new Circle('circle');

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('Generate Circle', () => {
        it('Should list proper points and svg of Circle class', () => {
            const data = {
                shape: 'circle',
                text: 'ABC',
                background: 'black',
                color: 'red'
            };
            const circle = new Circle(data);

            expect(generateLogo(data)).toEqual(`<svg width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        <circle cx="100" cy="100" r="100" fill="${data.background}" />
        <text class="text" x="25" y="60" fill='${data.color}'>
        ${data.text}
        </text>`);
        });
    });
});

describe('Square', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Square class', () => {
            const square = new Square('square');

            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('Generate Square', () => {
        it('Should list proper points and svg of Square class', () => {
            const data = {
                shape: 'square',
                text: 'ABC',
                background: 'black',
                color: 'red'
            };
            const square = new Square(data);

            expect(generateLogo(data)).toEqual(`<svg width="200" heigth="200">
        <style>
        .text {
            font-size: 30px;
        }
        </style>
        <rect width="100" height="100" fill="${data.background}" />
        <text class="text" x="25" y="60" fill='${data.color}'>
        ${data.text}
        </text>`);
        });
    });
});