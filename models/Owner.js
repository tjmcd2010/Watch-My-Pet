const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Owner extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Owner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    animalType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'animal_type',
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newOwnerData) => {
        newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
        return newOwnerData;
      },
      beforeUpdate: async (updatedOwnerData) => {
        updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
        return updatedOwnerData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner',
  }
);

module.exports = Owner;

// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class Owner extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// Owner.init(
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
//     animal_type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     breed: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class Owner extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// Owner.init(
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
//     animalType: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       field: 'animal_type',
//     },
//     breed: {
//       type: DataTypes.STRING,
//       allowNull: false,
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
//       beforeCreate: async (newOwnerData) => {
//         newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
//         return newOwnerData;
//       },
//       beforeUpdate: async (updatedOwnerData) => {
//         updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
//         return updatedOwnerData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'owner',
//   }
// );

// module.exports = Owner;
//       },
//     },
  
//     hooks: {
//       beforeCreate: async (newOwnerData) => {
//         newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
//         return newOwnerData;
//       },
//       beforeUpdate: async (updatedOwnerData) => {
//         updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
//         return updatedOwnerData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'owner',
//   }
// );

// module.exports = Owner;
