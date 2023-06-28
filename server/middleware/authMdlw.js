const jwt = require('jsonwebtoken') 

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next ()
    }
    try {
        const Token = req.headers.authorization.split(' ')[1]
        if(!Token) {
            return res.status(401).json({message: "Пользователь не авторизован"})
        }
        const decoded = jwt.verify(Token, process.env.Key)
        req.user = decoded
        next()
        } catch (e) {
            res.status(401).json({message: "Пользователь не авторизован"})
        }
};