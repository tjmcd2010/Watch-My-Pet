const sequelize = require('../config/connection');
const { Owner, PetSittingRequest } = require('../models');

const ownerData = require('./ownerData.json');
const requestData = require('./petSittingRequestData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const owners = await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  for (const requests of requestData) {
    await PetSittingRequest.create({
      ...requests,
      owner_id: owners[Math.floor(Math.random() * owners.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();