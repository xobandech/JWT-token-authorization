const login = async (req, res) => {
    const { password, login } = req.body
    if (password && login) {
        
    }
    res.send("Fake login/register route")
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello John Doe`, secret: `Here is your autorized data, lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}