const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
     process.env.DataBase_name,
     process.env.DataBase_user,
     process.env.DataBase_password, 
     {
        dialect: 'postgres',
        host: process.env.DataBase_host,
        port: process.env.DataBase_port
     }
)