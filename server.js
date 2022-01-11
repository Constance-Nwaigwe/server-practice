const express = require('express')

const app = express();
const port = 5000;

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('Success')
})
app.get('/index', (req,res) => {
    res.send('<p>Index file<p>')
})
app.get('/page2', (req,res) => {
    res.send('<p>page2 file<p>')
})

app.listen(port, () => {
    console.log(`server ${port} is running`)
})