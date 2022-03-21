const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.redirect('myWebsite')
})

app.get('/myWebsite', (req, res) => res.send('Hello, world!'))

app.listen(PORT, function(err){
    if (err) console.log(err)
    
    console.log("Server listening on PORT", PORT)
})