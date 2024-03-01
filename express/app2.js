const express = require('express');
const app = express();
const port = 7007;
const morgan = require('morgan');

// Middlware
app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./routers/product.routes');
app.use('/products', productRoutes);


app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
});