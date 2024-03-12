const express = require('express');
const app = express();
const port = 7000;
const morgan = require('morgan');
const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/dhavalApi');
}
main()
.then(()=>console.log(`DB is Connected SuccessFully...`))
.catch( err => {console.log(err);});

app.use(express.json());
app.use(morgan('dev'));

    // const productRoutes = require('./Routers/product2.routes');
    // app.use('/api/product',productRoutes);

app.listen(port,() => {
    console.log(`Server Start at http://localhost:${port}`);
}); 