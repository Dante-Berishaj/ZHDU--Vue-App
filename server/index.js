require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/users');
const { getAuthToken } = require('./middlewares/getAuthToken');
const helmet = require('helmet');
const authenticated = require('./routes/authenticated');

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

mongoose.connect(process.env.APP_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`connected to database`)).catch((err) => console.log(err));

app.use(getAuthToken);
//user routes
app.use('/api/users', users)

app.use('/list', authenticated)

//crud routes
app.use("/api/hotel", require("./routes/hotels"));
app.use("/api/restaurant", require("./routes/restaurants"));
app.use("/api/attraction", require("./routes/attractions"));
app.use("/api/city", require("./routes/cities"));



app.listen(port, 
    () => console.log(`Server has started on port ${port}`));