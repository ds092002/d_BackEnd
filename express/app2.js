const express = require('express');
const app = express();
const port = 7007;
const morgan = require('morgan');
const mongoose = require('mongoose');
// Database Connection
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/dhaval');
}
main()
.then(()=>console.log('DB is Connected SuccessFully.......'))
.catch( err =>{console.log(err)});

// Middlware
app.use(express.json());
app.use(morgan('dev'));

// Product Server
// const productRoutes = require('./routers/product.routes');
// app.use('/products', productRoutes);

// User Server
// const userRoutes = require('./routers/user.routes');
// app.use('/users',userRoutes)

// User Server (mongoosh)
const userRoutes = require('./routers/users2.routes');
app.use('/api/user',userRoutes);

app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
});