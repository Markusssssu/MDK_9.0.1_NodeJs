const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class Student extends Model {
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  secondName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  course: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Student',
  tableName: 'students'
});

module.exports = Student;
