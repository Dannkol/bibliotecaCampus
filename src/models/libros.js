import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};


const getAlllibrosEstadoDes = async () => {

  const Connection = await getConnection();

  try {
    
    const query = `SELECT t1.titulo, t2.descripcion, t2.nombre AS "estado" FROM libro AS t1
    INNER JOIN estado_libro AS t2 ON t1.id_estado = t2.id_estado;`;

    const [query_res] = await Connection.execute(query);

    return {
      mensaje: "Todos los libros y sus estados",
      data : query_res
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los libros" });
  }finally{
    Connection.end();
  }


}

export default { getAlllibrosEstadoDes }