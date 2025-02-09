require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000 || process.env.PORT;
const conectDB =  require('./controller/data_base_connect')
const find_data = require('./router/find_data')
const cors = require('cors');

conectDB();

app.use(cors());
app.use(express.static('public'))

app.use('/find', find_data)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})



app.get('/index', (req, res)=> {
  res.sendFile('templates/index.html', {root: __dirname});  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
