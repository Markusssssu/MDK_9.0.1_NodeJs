const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('../routes/auth');
const sequelize = require('../config/database');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(session({ secret: 'key', resave: false, saveUninitialized: false }));
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../public/index.html')));

sequelize.sync();
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));