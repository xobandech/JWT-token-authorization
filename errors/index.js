const CustomAPIError = require("./custom-error");
const BadRequest = require("./bad-request")
const UnauthentificatedError = require("./unauthorized")

module.exports = {
    CustomAPIError,
    BadRequest,
    UnauthentificatedError
}