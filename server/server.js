import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
//Import Routes
import Subscribe from './routes/subscribe';
import FormType from './routes/formtype';
require('dotenv/config');
const port = 2022;
const app = express();
//BodyParser
app.use(bodyParser.json());
app.use(express.json());
// use cors
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET");
        return res.send(200).json({});
    }
    next();
});


// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use('/subscribe', Subscribe);
app.use('/formtype', FormType)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    (req, res) => console.log("DB is connected!")
);

// Get members
// app.get('/api/members',(req, res) => res.json(members))



// app.get('/', (req,res) => {
//     res.send("Express Server!")
// });

app.listen(port, () => console.log("Listening on port: " + port))