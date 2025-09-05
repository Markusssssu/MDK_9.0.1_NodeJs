const { sequelize } = require('./config/database');
const Student = require('./model/Student');

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    const student = await Student.create({
      firstName: 'Mark',
      secondName: 'Mansurov',
      age: 19,
      course: 3
    });
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close();
  }
}

main();
