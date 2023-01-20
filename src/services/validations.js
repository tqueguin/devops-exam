function isValid(gamertag){
    if(gamertag.length < 8) return false;
    return true;
}

const isEmpty = (label) => !label || label.length === 0;

exports.isValid = isValid;
exports.isEmpty = isEmpty;
