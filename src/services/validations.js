function isValid(gamertag) {
    if (gamertag.length < 8) return false;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numbers = /[0-9]/;
    return specialChars.test(gamertag) && numbers.test(gamertag);
}

const isEmpty = (label) => !label || label.length === 0;

exports.isValid = isValid;
exports.isEmpty = isEmpty;
