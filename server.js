require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000 || process.env.PORT;
const conectDB =  require('./controller/data_base_connect')
const find_data = require('./router/find_data')
const cors = require('cors');
const ejs_find = require('./controller/ejs_controller');

conectDB();


app.set("view engine", "ejs")

app.use(cors());
app.use(express.static('public'))

app.use('/find', find_data)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})



app.get('/index', (req, res)=> {
  res.sendFile('templates/index.html', {root: __dirname});  
})


app.get('/ejs/:rollnumber', async(req,res)=> {
       const rollnumber = req.params.rollnumber;
       console.log(`request hit for ${rollnumber}`); 
       const output = await ejs_find(rollnumber);
       console.log(output);
       if (output) {
         res.render('student', {name: `${output.name}`, rollnumber: `${output.rollNumber}`, id: `${output.id}`,})
       } else {
        res.send('<h3>no data found</h3>')
       }
})

app.use((req,res)=> {
   return res.send("<h2>Page you're looking is not found,<a href='/'>Go to Home</a></h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
