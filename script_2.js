let num = prompt('De quel nombre veux-tu calculer la factorielle ?')

const factor = (num) => {
    if (num === 0 || num === 1)
        return 1
    for (let i = num - 1; i >= 1; i--) {
        num *= i
    }
    return num
}


console.log(`la factorialle de ${num} est ${factor(num)}`)
