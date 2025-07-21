const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');

host = process.env.DB_HOST;
database = process.env.DB_NAME;
username = process.env.DB_USER;
password = process.env.DB_PASS;

const sequelize = new Sequelize (database, username, password, {
	host: host,
	dialect: 'mysql',
    // esto dice la consola que no es valido, no rompe nada pero por las dudas lo comento
	// dialectOptions: { options: { encrypt: true } },
	define: { timestamps: false }
});

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar a la base de datos: ', error);
    }
}

async function closeConnection() {
    try {
        await sequelize.close();
        console.log('Conexión cerrada correctamente');
    } catch (error) {
        console.error('Error al cerrar la conexión: ', error);
    }
}

module.exports = { sequelize, authenticate, closeConnection };