// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class Sitter extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// Sitter.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       field: 'first_name',
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       field: 'last_name',
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (newSitterData) => {
//         newSitterData.password = await bcrypt.hash(newSitterData.password, 10);
//         return newSitterData;
//       },
//       beforeUpdate: async (updatedSitterData) => {
//         updatedSitterData.password = await bcrypt.hash(updatedSitterData.password, 10);
//         return updatedSitterData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'sitter',
//   }
// );

// module.exports = Sitter;


// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Sitter extends Model {}

// Sitter.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },
    
  
//     hooks: {
//       beforeCreate: async (newSitterData) => {
//         newSitterData.password = await bcrypt.hash(newSitterData.password, 10);
//         return newSitterData;
//       },
//       beforeUpdate: async (updatedSitterData) => {
//         updatedSitterData.password = await bcrypt.hash(updatedSitterData.password, 10);
//         return updatedSitterData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'sitter',
//   }
// );

// module.exports = Sitter;
