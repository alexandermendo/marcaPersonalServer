import {Sequelize} from 'sequelize';

const db = new Sequelize('marcapersonal', 'root', 'jamp1987+', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;

