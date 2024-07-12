const Owner = require('./Owner');
const Sitter = require('./Sitter');

Owner.hasMany(Sitter, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE'
});

Sitter.belongsTo(Owner, {
  foreignKey: 'sitter_id'
});

module.exports = { Owner, Sitter };
