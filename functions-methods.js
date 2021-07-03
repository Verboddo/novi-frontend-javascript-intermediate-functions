// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// Write function to split e-mail
function getEmailDomain(mail) {
    //make variable to save email domain
    let domeinNaam = mail.split('@')[1]

    //log email domain name
    /*console.log(domeinNaam)*/
    // return domain name
    return domeinNaam
}

//use function
/*getEmailDomain("n.eeken@novi-education.nl")
getEmailDomain("t.mellink@novi.nl")
getEmailDomain("a.wiersma@outlook.com")*/


// Opdracht  2
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"//

// create function to check type of mail
function typeOfEmail(mail) {
    // create if statement to check which domain is for which type
    if(getEmailDomain(mail) === 'novi-education.nl') {
        console.log('Student')
    } else if (getEmailDomain(mail) === 'novi.nl') {
        console.log('Medewerker')
    } else if (getEmailDomain(mail) === 'outlook.com') {
        console.log('Extern')
    }
}

// check type of email
typeOfEmail("n.eeken@novi-education.nl")
typeOfEmail('T.mellink@novi.nl')
typeOfEmail('novi.nslaapjesk@outlook.com')
typeOfEmail("a.wiersma@outlook.com")

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

//Create function to check email validity
function checkEmailValidity(mail) {
    //create temporary variable for mail
    const tempMail = mail

    //create variable for last char in string
    const lastChar = tempMail.slice(-1)

    //check with if statement if all conditions are true
    if (tempMail.includes('@') && !tempMail.includes(',') && !lastChar.includes('.')) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// check email validity
checkEmailValidity("n.eeken@novi.nl")
checkEmailValidity("tessmellink@novi.nl")
checkEmailValidity("n.eekenanovi.nl")
checkEmailValidity("n.eeken@novinl.")
checkEmailValidity("tessmellink@novi,nl")