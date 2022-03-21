const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

const PORT = 8080;

//Links
router.get('/', (req, res) => {
    res.redirect('myWebsite/index.html');
});

router.get('/myWebsite', (req, res) => {
    res.redirect('myWebsite/index.html');
});

router.get('/myWebsite/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Application
app.use('/', router);

//Errs log
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});