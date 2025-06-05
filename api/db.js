
import { Sequelize, DataTypes } from "sequelize"

const db = {
  NAME: "barber",
  USERNAME: "barber",
  PASSWORD: "barber",
  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.TAW_Status2",
    port: 3306,
    logging: (str) => console.log(str)
  }
}

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options)

export const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  password: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize,
  freezeTableName: true,
  paranoid: true
})

export const Barber = sequelize.define("Barber", {
  name: { type: DataTypes.STRING, allowNull: false },
  specialization: { type: DataTypes.STRING }
}, {
  sequelize,
  freezeTableName: true,
  paranoid: true
})

export const Service = sequelize.define("Service", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  duration: { type: DataTypes.INTEGER } 
}, {
  sequelize,
  freezeTableName: true,
  paranoid: true
})

export const Appointment = sequelize.define("Appointment", {
  date: { type: DataTypes.DATEONLY, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false }
}, {
  sequelize,
  freezeTableName: true,
  paranoid: true
})

export const Review = sequelize.define("Review", {
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
  comment: { type: DataTypes.TEXT }
}, {
  sequelize,
  freezeTableName: true,
  paranoid: true
})


User.hasMany(Appointment)
Appointment.belongsTo(User)

Barber.hasMany(Appointment)
Appointment.belongsTo(Barber)

Service.hasMany(Appointment)
Appointment.belongsTo(Service)

User.hasMany(Review)
Review.belongsTo(User)

Appointment.hasOne(Review)
Review.belongsTo(Appointment)
