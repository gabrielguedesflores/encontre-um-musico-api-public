const jwt = require("jsonwebtoken");

const jwtTokenDecodificator = (jwtToken) => {

    const decodedToken = jwt.decode(jwtToken);
    return decodedToken;
}

module.exports = {
    jwtTokenDecodificator
}