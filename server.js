import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
// const { Pool } = pkg;
const app = express();
app.use(express.json());

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
// pool.connect()
//   .then(() => console.log('✅ PostgreSQL Connected'))
//   .catch(err => console.error('❌ PostgreSQL Connection Error', err));




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// app.post('/database_insert',async (req,res)=>{
//     const { name_, phone, email, company, service, message } = req.body;
//     const columns = ['name', 'phone', 'email', 'company', 'service', 'message'];
//     const values = [name_, phone, email, company, service, message];
//     const query = `
//       INSERT INTO contact_submissions (${columns.join(', ')})
//       VALUES (${values.map((_, i) => `$${i + 1}`).join(', ')})
//       RETURNING *;
//     `;
  
//     try {
//       // Execute the query
//       const result = await pool.query(query, values);
  
//       // Send the inserted data back as response
//       res.status(200).json({
//         success: true,
//         message: 'Data inserted successfully',
//         data: result.rows[0],
//         report:1
//           });
//       console.log('data entered successfully');
//     } catch (err) {
//       // Handle any errors that occurred during query execution
//       console.error('Error inserting data:', err);
//       res.status(500).json({
//         success: false,
//         message: 'Error inserting data',
//         error: err.message,
//       });
//     }
//   });
// app.get('/admin/entries', async (req, res) => {
//     try {
//       const result = await pool.query('SELECT * FROM contact_submissions ORDER BY submitted_at DESC');
//       res.json(result.rows);
//     } catch (err) {
//       console.error('Error fetching entries:', err);
//       res.status(500).json({ error: 'Failed to fetch entries' });
//     }
//   });
// app.get('/admin',(req,res)=>{
//   res.sendFile(path.join(__dirname, 'public', 'admin.html'));
// })

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server running at http://localhost:8080');
});
