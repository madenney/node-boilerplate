
//import comments from '../comments.json'


// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();

export default (req, res) => {
  res.status(200).json({ post: req.query.id, message: "hello world" })
}