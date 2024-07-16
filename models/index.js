const Owner = require('./Owner');
const PetSittingRequest = require('./PetSittingRequest');

Owner.hasMany(PetSittingRequest, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE'
});
PetSittingRequest.belongsTo(Owner, {
  foreignKey: 'owner_id'  
})

module.exports = { Owner, PetSittingRequest };
