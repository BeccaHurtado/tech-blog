// model and datatypes imported from sequelize program
const { Model, DataTypes } = require('sequelize');

// protect user password

// import connection
const sequelize = require('../config/connection');

// create User model
class User extends Model {
    // set up password authentication
}

// table columns & configuration
User.init(
    {
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // length of password
                len: [6]
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }   
);

module.exports = User;