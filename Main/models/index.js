const Owner = require('./Owner');
const Sitter = require('./Sitter');

Owner.hasMany(Sitter, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sitter.belongsTo(Owner, {
  foreignKey: 'user_id'
});

module.exports = { Owner, Sitter };
