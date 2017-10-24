const express = require('express');
const path = require('path');
const app = express();



app.get('/hitApi', (req,res) => {
    res.json({test:'stuff'});
    console.log('something')
})

app.listen(3001, () => console.log('running on port 3001'))