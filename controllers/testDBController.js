const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: process.env.DB_HOST, 
     user: process.env.DB_USER, 
     password: process.env.DB_PASS,
     connectionLimit: 5
});

let getTestConnection = async(req,res) => {

  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * from dummy.people");
  res.status(200).json({
    status:true,
    result: rows,
    message: 'Alright!'
  })
  } catch (err) {
    res.status(400).json({
      status: false,
      result: err,
      message: 'Yuck!!!'
    })
	throw err;
  } finally {

    if (conn) return conn.end();
  }
}

module.exports = { 
  getTestConnection
}