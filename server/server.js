const express = require('express');
const bodyParser = require('body-parser')

// importing the controller
const cr = require('./controller')

// invoking express and using bodyParser middleware
const app = express()
app.use(bodyParser.json())



/* EndPoints Go Here */

app.post(`/api/cards`, cr.getCards);
app.post(`/api/moveCard`, cr.moveCard);
app.post(`/api/addCard`, cr.addCard);


app.listen(4545,()=>{
    console.log('4545: ...running admirably...');
})