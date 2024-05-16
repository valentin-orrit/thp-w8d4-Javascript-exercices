const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];


// entrepreneurs né dans les années 70
const entrepreneursNésDansLesAnnées70 = []

entrepreneurs.forEach(entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year <= 1980) {
        entrepreneursNésDansLesAnnées70.push(entrepreneur)
    }
})

console.log('\nles entrepreneurs nés dans les années 70 sont :')
console.log(entrepreneursNésDansLesAnnées70)


// Nom et prénom des entrepreneurs
const nomsEtPrénomsDesEntrepreneurs = []

entrepreneurs.forEach(entrepreneur => {
    nomsEtPrénomsDesEntrepreneurs.push(entrepreneur.first + " " + entrepreneur.last)
})

console.log('\nles noms et prénoms des entrepreneurs sont :')
console.log(nomsEtPrénomsDesEntrepreneurs)


// L'âge des entrepreneurs aujourd'hui
const ageDesEntrepreneursAujourdhui = []
const thisYear = 2024

entrepreneurs.forEach(entrepreneur => {
    const age = thisYear - entrepreneur.year
    entrepreneur.age = age
  })

console.log('\nles ages des entrepreneurs :')
console.log(entrepreneurs)


// ordre alphabétique par noms de famille
entrepreneurs.sort((a, b) => {
    if (a.last < b.last) {
        return - 1
    } else if(a.last > b.last) {
        return 1
    }
    return 0
})

console.log('\nles entrepreneurs classés par ordre alphabétique')
console.log(entrepreneurs)