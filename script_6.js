const string1 = "CCGUCGUUGCGCUACAGC"
const string2 = "CCUCGCCGGUACUUCUCG"

const ARN1 = string1.match(/.{3}/g)
const ARN2 = string2.match(/.{3}/g)

// console.log(ARN)

const convertToARN = (arn) => {
    const convertedARN = arn.map(chunk => {
        switch(chunk) {
            case "UCU": 
            case "UCC":
            case "UCA":
            case "UCG":
            case "AGU":
            case "AGC":
                return "Sérine"
            case "CCU":
            case "CCC":
            case "CCA":
            case "CCG":
                return "Proline"
            case "UUA":
            case "UUG":
                return "Leucine"
            case "UUU":    
            case "UUC":
                return "Phénalylalanine"
            case "CGU":
            case "CGC":
            case "CGA":
            case "CGG":
            case "AGA":
            case "AGG":
                return "Arginine"
            case "UAU":
            case "UAC":
                return "Tyrosine"
            default:
                return chunk
        }
    })
    return convertedARN.join('-')
}

console.log("\nle premier ARN est:\n" + convertToARN(ARN1))

console.log("\nle second ARN est:\n" + convertToARN(ARN2))
