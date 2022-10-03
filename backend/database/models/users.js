const bcrypt = require("bcrypt");
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Users.init(
        {
            name: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                set: function (value) {
                    const encryptedPassword = bcrypt.hashSync(value, 10);
                    this.setDataValue("password", encryptedPassword);
                },
            },
            profilePic: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Users",
        }
    );
    return Users;
};
