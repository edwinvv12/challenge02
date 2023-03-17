function chekEmail(email ) {
    if (typeof email !== 'string') {
        return "ERROR : EMAIL MUST BE A STRING"
    }

    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;
    if (regex.test(email)) {
        return "VALID";
    } else {
        return "INVALID : EMAIL INCORRECT";
    }
}

function checkTypeNumber(check) {
    if (typeof check === "number") {
        return "ERROR : DATA ARE NUMBERS";
    } else {
        return "ERROR : DATA MUST BE A STRING";
    }
}



console.log(chekEmail ('apranat@binar.co.id'))
console.log(chekEmail ('apranat@binar.com'))
console.log(chekEmail ('apranat@binar'))
console.log(chekEmail ('apranat'))
console.log(checkTypeNumber (chekEmail(3322)))
console.log(chekEmail (''))
