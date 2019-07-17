exports.sequelizeInit = async ctx => {
  const models = require('./models');
  models.sequelize.sync()
  .then(() => {
    console.log('✓ DB connection success.');
    console.log('  Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.log('✗ DB connection error. Please make sure DB is running.');
    console.error(err);
    process.exit(-1);
  })
};