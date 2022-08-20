import { randomBytes, scryptSync } from 'crypto'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    timestamps: false
  })

  User.beforeValidate((user, _) => {
    user.salt = user.salt ?? randomBytes(16).toString('hex')
    user.password = scryptSync(user.password, user.salt, 64).toString('hex')
  })

  return User
}