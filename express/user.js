const express = require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');


// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./routers/users.routes');
app.use('/users',userRoutes)

app.listen(port,() => {
    console.log(`Server Start At http://localhost:${port}`);
});  