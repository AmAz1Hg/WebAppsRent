const apiError = require("../errors/apiError");
const { User } = require("../DBmodels/DBmodels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {json} = require("sequelize");


const creatingToken = (id, mail, role) => {                // Получаем Токен
    return jwt.sign(
        {id, mail, role},    
        process.env.Key,
        {expiresIn: '12h'}
    )
}

class UserContr {
  
    async reg(req, res, next) {                             // Регистрация
    const {mail, password, role} = req.body 

    if (!mail || !password) { 
      return next(apiError.request("Пароль или логин введены неверно"))
    }
    const users = await User.findOne({where: {mail}});

    if (users) {
      return next(apiError.request("Такой пользователь зарегестрирован"));
    }
    const hash = await bcrypt.hash(password, 2);
    const user = await User.create({mail, role, password: hash});
    const token = creatingToken(user.id, user.mail, user.role)
    return res.json({token})
  }

  async log(req, res, next) {                                    // Вход
      const {mail, password} = req.body
      const alrdyuser = await User.findOne({where: {mail}})
      if(!alrdyuser) {
        return next(apiError.request('Такого пользователя не существует'))
      }
      let checkHashPass = bcrypt.compareSync(password, alrdyuser.password)

      if(!checkHashPass) {
          return next(apiError.request('Неверный пароль'))
      }
      const token = creatingToken(alrdyuser.id, alrdyuser.mail, alrdyuser.role)
      return res.json({token})
  }

  async passError(req, res, next) {                                    // Вход
    const {mail, password} = req.body
    const alrdyuser = await User.findOne({where: {mail}})
    if(!alrdyuser) {
      return next(apiError.request('Такого пользователя не существует'))
    }
    let checkHashPass = bcrypt.compareSync(password, alrdyuser.password)

    if(!checkHashPass) {
        return next(apiError.request('Неверный пароль'))
    }
    const token = creatingToken(alrdyuser.id, alrdyuser.mail, alrdyuser.role)
    return res.json({token})
}

  async check(req, res, next) {                                      // Проверка пользователя
    const token = creatingToken(req.user.id, req.user.mail, req.user.role)
    return res.json({token})
  }
}

module.exports = new UserContr();
