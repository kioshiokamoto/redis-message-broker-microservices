import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consola from 'consola';
import adminRoutes from './routes/adminRoutes.js';
import pool from './utils/db.js';
import bcrypt from 'bcrypt';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/admin', adminRoutes);

// const demoDb = async () => {
// 	const password = await bcrypt.hash('123456', 6);
// 	const demo = await pool.query(
// 		`insert into usuario
// 		(us_rol,us_nombre,us_apellido,us_correo,us_password,us_departamento,us_provincia)
// 		values
// 	   (1,'Kioshi','Okamoto','kjor29@gmail.com',?,'Lima','Huaral');`,
// 		password
// 	);
// 	console.log(demo);
// };

// demoDb();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor ejecutandose en puerto ${PORT}` });
});

// Ejemplos de queries
// const objeto = await pool.query('SELECT * FROM test_usuario WHERE idusuario = ?', rows[0].idusuario);
//  const result = await pool.query('INSERT INTO usuarios SET ? ', [newUser]);
