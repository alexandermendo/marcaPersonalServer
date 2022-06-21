import {Sequelize} from 'sequelize';

const db = new Sequelize('marcapersonalproduccion', 'root', 'jamp1987+', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;

