// RECTANGLES
// makeLine
function makeLine(size) {
    let drawLine = '';
    for (let i = 0; i < size; i++) {
        drawLine += '#';
    }
    return drawLine;
}

// makeSquare
function makeSquare(size) {
    let drawSquare = ''
    // for (let i = 0; i < size; i++) {
    //     drawSquare += '\n' + makeLine(size);
    // }
    drawSquare = makeRectangle(size, size);
    return drawSquare;
}

// makeRectangle
function makeRectangle(width, height) {
    let drawRectangle = '';
    for (let i = 0; i < height; i++) {
        drawRectangle += '\n' + makeLine(width);
    }
    return drawRectangle;
}

// TRIANGLES
// makeDownwardStairs
function makeDownwardStairs(height) {
    let drawTriangle = '';
    for (let i = 0; i < height; i++) {
        drawTriangle += '\n' + makeLine(i + 1);
    }
    return drawTriangle;
}

// makeSpaceLine
function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine + makeLine(numChars) + spaceLine;
}

// reverse function
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

// makeIsoscelesTriangle
function makeIsoscelesTriangle(height) {
    let drawIsoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        drawIsoscelesTriangle += '\n' + makeSpaceLine((height - i -1), (2 * i + 1));
    }
    return drawIsoscelesTriangle;
}

//makeReverseIsoTriangle
function makeReverseIsoTriangle(height) {
    let drawReverseTriangle = '';
    for (let i = 0; i < height; i++) {
        drawReverseTriangle += '\n' + makeSpaceLine((height - i -1), (2 * i + 1));
    }
    return reverse(drawReverseTriangle);
}
// DIAMONDS
// makeDiamond
function makeDiamond(height) {
    let drawDiamond = '';
    drawDiamond = makeIsoscelesTriangle(height) + '\n' + makeReverseIsoTriangle(height);
    return drawDiamond;
}

console.log(makeDiamond(6));