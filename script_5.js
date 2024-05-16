const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// est-ce que tous les livres ont étés empruntés?
const livreEmpruntés = books.some((book) => book.rented != 0)

console.log('\n est-ce que les livres ont tous été empruntés?')
console.log(livreEmpruntés)


// quel est le livre le plus emprunté
books.sort((a, b) => {
    if (a.rented < b.rented) {
        return - 1
    } else if(a.rented > b.rented) {
        return 1
    }
    return 0
})

console.log('\nLe livre le plus empruté est :')
console.log(books.slice(-1))


console.log('\nLe livre le moins empruté est :')
console.log(books[0].title)


// IDs
const firstId = (book) => {
    return book.id === 873495
}

console.log("\nLe livre avec l'id 873495 est")
console.log(books.find(firstId).title)


// IDs pt 2
const secondId = (book) => {
    return book.id === 133712
}

const bookToRemove = books.findIndex(secondId)
books.splice(bookToRemove, 1)

console.log("\n l'array sans le livre à l'id 133712")
console.log(books)


// Ordre alphabétique
books.sort((a, b) => {
    if (a.title < b.title) {
        return - 1
    } else if(a.title > b.title) {
        return 1
    }
    return 0
})

console.log('\nles livres classés par ordre alphabétique')
console.log(books)
