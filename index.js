require('dotenv').config()
const express = require('express')

const app = express()

const port = 8000//65000 approx port are there in which we can use

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send("helloshivansh goel");
})
app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code');
})
app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code');

})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port :  ${port}`)
})