const CustomAPIError = require("../errors/custom-error")
const jwt = require("jsonwebtoken")
const login = async (req, res) => {
    const { password, username } = req.body
    if (!password || !login) {
        throw new CustomAPIError('Please provide email and password', 400)
    }
    const id = new Date().getDate()

    // keep payload small, better experience
    const token = jwt.sign({
        id,
        username
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    res.status(200).json({
        msg: "User created",
        token: token
    })
}

const dashboard = async (req, res) => {

}

module.exports = {
    login,
    dashboard
}