let rows = prompt("Combien d'étages veux-tu ?")

function printPyramid(rows) {
    let pyramid = ''
    for (let i = 0; i < rows; i++) {
        pyramid += ' '.repeat(rows - i - 1)
        pyramid += '#'.repeat(i + 1)
        pyramid += '\n'
    }
    console.log(pyramid)
}

printPyramid(rows)
