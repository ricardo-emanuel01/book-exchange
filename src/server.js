require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const route = require('./routes/routes')

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(route)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


