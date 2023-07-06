const mongoose = require('mongoose');
const express = require('express');
const bookRouter = require('./routes/bookRoutes');
const app = express();

const DB = 'mongodb+srv://elsayedhabiba065:sSORmuuenbtNEwRa@book-store.wga8kpe.mongodb.net/'

mongoose.connect(DB)
.then(() => console.log('DB connection successful'));


app.use(express.json());

app.use('/api/v1/books', bookRouter);

app.listen(3000, ()=>{
    console.log(`Server is running on 3000 port`);
});

module.exports = app;