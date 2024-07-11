const sequelize = require('../config/connection');
const { Owner, Sitter } = require('../models');

const ownerData = require('./ownerData.json');
const sitterData = require('./sitterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const owners = await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  for (const sitter of sitterData) {
    await Sitter.create({
      ...sitter,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
