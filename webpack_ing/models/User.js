const { init } = require('es-module-lexer');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('User', {
            user_num: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                comment: '고유번호'
            },
            email : {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
            upassword : {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
            uname : {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
            address : {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
            phoneNum : {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false
            },
        },
        {
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName: 'userTable3',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
        /*
        User.associate = models => {
            User.hasOne(models.UserInfo, {foreignKey: "user_id", sourceKey: "id"});
        };
        */
    }