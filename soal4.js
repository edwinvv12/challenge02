function isValidPassword(givenPassword) {
    
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(givenPassword === undefined){
        return "ERROR: PLEASE FILL THE PASSWORD"
    } else if(pattern.test(givenPassword)) {
        return true
    } else if(typeof givenPassword === 'number') {
        return "ERROR: PASSWORD MUST BE A STRING"
    } else {
        return false
    }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())