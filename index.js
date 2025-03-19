import express from 'express';
import studentRoutes from './routes/Student.js'
import routes from './routes/routes.js'
import teacherRoutes from './routes/Teacher.js'
import { products } from './store/products.js';
import userDetails from './middlewares/logs.js';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv'
import { insertManyDoc } from './models/Movies.js';
dotenv.config();



connectDB();



const app = express();




// console.clear()

// app.get('/student', (req, res) => {
//   res.send("All Stduent")
// });

// app.put('/student', (req, res) => [
//   res.send('update student')
// ]);

// app.post('/student', (req, res) => {
//   res.send('create student')
// })

// app.delete('/student', (req, res) => {
//   res.send('delete student')
// })


//refractor routes

// app
//   .route('/student')
//   .get((req, res) => {
//     res.send("all student")
//   })
//   .put((req, res) => {
//     res.send("update student");
//   })
//   .post((req, res) => {
//     res.send("add a new student")
//   });


// app.use(express.static('./public'))

app.set('view engine', 'ejs')
app.use(userDetails);

app.use('/homeApi', routes);
app.use('/students', studentRoutes);
app.use('/teacher', teacherRoutes);



//routes params

app.get('/ecom/products/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category : ${category} and Product Id : ${id} `)
})


// query string --> (?) &

app.get('/product', (req, res) => {

  res.json(products);


})

// app.get('/home', (req, res) => {
//   res.sendFile(path.join(process.cwd(), './public/index.html'))
// }) 

const port = process.env.PORT || 8000;

insertManyDoc()
app.listen(process.env.PORT || 8000, () => console.log(`${port}`))

