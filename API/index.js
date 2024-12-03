const express = require('express');
const app = express();
const port = 3000 ;
const morgan = require('morgan');
const db = require('./config/db'); 
const cors = require('cors');
const path = require('path');
const route = require('./routes');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use(cors())
app.use(morgan('combined'))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
db.connect()
//router 
route(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})