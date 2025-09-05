const { sequelize } = require('./config/database');
const Student = require('./model/Student');

async function main() {
  try {
    // Проверяем подключение к БД
    console.log('🔄 Проверяем подключение к БД...');
    await sequelize.authenticate();
    console.log('✅ Подключение к БД установлено!');

    // Создаем таблицы
    console.log('🔄 Создаем таблицы...');
    await sequelize.sync({ force: true });
    console.log('✅ Таблицы созданы!');

    // Создаем студента
    console.log('👨‍🎓 Создаем студента...');
    const student = await Student.create({
      firstName: 'Mark',
      secondName: 'Mansurov',
      age: 19,
      course: 3
    });
    
    console.log('✅ Студент создан:', student.getFullName());
    console.log('📚 Курс:', student.course);
    
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
    console.error('💡 Убедитесь что:');
    console.error('   1. MySQL сервер запущен');
    console.error('   2. База данных "practice_db" создана');
    console.error('   3. Пользователь "root" имеет доступ');
  } finally {
    // Закрываем соединение
    await sequelize.close();
  }
}

main();
