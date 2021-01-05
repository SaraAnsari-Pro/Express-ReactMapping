const express = require('express');
const app = express();
const cors =require('cors');
app.use(cors());

app.get('/', (req,res) => {
    res.send('this is my Home page')
});
app.get('/index', (req,res) => {
    res.sendFile(__dirname+'/index.html')
});



app.listen(3009, () => {
    console.log('server 3009')
})