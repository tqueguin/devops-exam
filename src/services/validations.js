function isValid(gamertag) {
    if (gamertag.length < 8) return false;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(gamertag);
}

const isEmpty = (label) => !label || label.length === 0;

exports.isValid = isValid;
exports.isEmpty = isEmpty;
