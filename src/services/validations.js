function isValid(gamertag) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numbers = /[0-9]/;
    return specialChars.test(gamertag) && numbers.test(gamertag) && gamertag.length >= 8;
}

const isEmpty = (label) => !label || label.length === 0;

exports.isValid = isValid;
exports.isEmpty = isEmpty;
