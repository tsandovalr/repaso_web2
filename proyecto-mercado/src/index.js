require('dotenv').config();
const express =require('express');
const app =require('./server');

require('./database');

app.listen(app.get('port'), ()=> {
    console.log('server on port:', app.get('port'))
})