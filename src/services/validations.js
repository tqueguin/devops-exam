function isValid(gamertag){
    return false;
}

const isEmpty = (label) => !label || label.length === 0;

exports.isValid = isValid;
exports.isEmpty = isEmpty;
