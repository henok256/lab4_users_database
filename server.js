const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const  app = express();
app.use(express.json);   // brings the data in a jason format


mongoose.connect('mongodb+srv://henok91:Jando1980@cluster0.ysmvz.mongodb.net/GBC-Full-Stack?retryWrites=true&w=majority', {
     useNewUrlParser:true,
     useUnifiedTopology: true
     
});


app.use(userRouter);
app.listen(4000, ()=>{console.log('Server is running on port 4000')});


