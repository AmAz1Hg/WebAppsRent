const sequelize = require("../dataBase");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  // Пользователь

  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // ID

  mail: { type: DataTypes.STRING, unique: true }, // Логин
  password: { type: DataTypes.STRING }, // Пароль
  role: { type: DataTypes.STRING, defaultValue: "User"}  // Роль

})  

const Apps = sequelize.define("apps", {
  // Апартаменты на аренду

  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // ID

  city: { type: DataTypes.STRING, unique: false, allowNull: false }, // Город
  location: { type: DataTypes.STRING, unique: false, allowNull: false }, // Место

  area: { type: DataTypes.INTEGER, allowNull: false }, // Площадь
  rooms: { type: DataTypes.INTEGER, allowNull: false }, // Число комнат

  rent: { type: DataTypes.INTEGER, allowNull: false }, // Аренда (стоимость)
  guarantee: { type: DataTypes.INTEGER, allowNull: false }, // Гарантия (стоимость)
  commision: { type: DataTypes.INTEGER, allowNull: false }, // Комиссия (стоимость)

  arrival: { type: DataTypes.STRING, allowNull: false },    //  Дата начала аренды
  departure: { type: DataTypes.STRING, allowNull: true },  //  Дата окончания

  equipments: { type: DataTypes.STRING, unique: false, allowNull: true },  // Оснащение
  descriptions: { type: DataTypes.STRING, unique: false, allowNull: true }, // Описание

  img_1: { type: DataTypes.STRING, allowNull: false }, // Изображение 1
  img_2: { type: DataTypes.STRING, allowNull: false }, // Изображение 2
  img_3: { type: DataTypes.STRING, allowNull: false }, // Изображение 3
});


const AppsSale = sequelize.define("appsSale", {
  // Апартаменты на продажу

  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // ID

  city: { type: DataTypes.STRING, unique: false, allowNull: false }, // Город
  location: { type: DataTypes.STRING, unique: false, allowNull: false }, // Место

  area: { type: DataTypes.INTEGER, allowNull: false }, // Площадь
  rooms: { type: DataTypes.INTEGER, allowNull: false }, // Число комнат
  cost: { type: DataTypes.INTEGER, allowNull: false }, // Стоимость

  equipments: { type: DataTypes.STRING, unique: false, allowNull: false }, 
  descriptions: { type: DataTypes.STRING, unique: false, allowNull: false },

  img_1: { type: DataTypes.STRING, allowNull: false }, // Изображение 1
  img_2: { type: DataTypes.STRING, allowNull: false }, // Изображение 2
  img_3: { type: DataTypes.STRING, allowNull: false }, // Изображение 3
});

const AppsInfo = sequelize.define("apps_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // ID

  equipment: { type: DataTypes.STRING, allowNull: false }, // Оснащение
  description: { type: DataTypes.STRING, allowNull: false }, // Описание
});

User.hasOne(Apps);
Apps.belongsTo(User);

User.hasOne(AppsSale);
AppsSale.belongsTo(User);

Apps.hasMany(AppsInfo, {as: 'info'});
AppsInfo.belongsTo(Apps);

module.exports = {
  User,
  Apps,
  AppsSale,
  AppsInfo,
};
