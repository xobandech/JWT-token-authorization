const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const { UnauthentificatedError, BadRequest } = require("../errors/index")

const login = async (req, res) => {
  const { password, username } = req.body;
  if (!password || !login) {
    throw new BadRequest("Please provide email and password");
  }
  const id = new Date().getDate();

  // keep payload small, better experience
  const token = jwt.sign(
    {
      id,
      username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  res.status(200).json({
    msg: "User created",
    token: token,
  });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  const user = req.user 
  res.status(200).json({
    msg: `Hello ${user.username}`,
    secret: `Here is your autorized data, lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
