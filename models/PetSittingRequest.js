// Set up the PetSittingRequest model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetSittingRequest extends Model {
    get pet() {
        return `${this.petName} - ${this.petType} - ${this.petBreed} - ${this.petWeight}`
    };
}

PetSittingRequest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petBreed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petWeight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        serviceType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serviceStartDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        serviceEndDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ownerPhone: {
            type: DataTypes.STRING,
            allowNull: false}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'petsittingrequest',
        getterMethods: {
            pet() {
                return `${this.petName} - ${this.petType} - ${this.petBreed} - ${this.petWeight}`
            }  
        }
    }
);

module.exports = PetSittingRequest;
        
    


