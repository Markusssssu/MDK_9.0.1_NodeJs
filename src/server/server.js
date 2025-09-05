const express = require('express');
const path = require('path');
const { sequelize } = require('../config/database');
const Student = require('../model/Student');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/register', async (req, res) => {
    const { firstName, secondName, age, course } = req.body;
    await Student.create({ firstName, secondName, age, course });
    res.send('1');
});

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('Сервер запущен на http://localhost:3000');
});
