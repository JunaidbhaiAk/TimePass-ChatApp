import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import Connection from './config/db.js';
import bodyParser from 'body-parser';
import route from './routes/route.js';

const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

const dbuser = process.env.DB_USERNAME;
const dbpass = process.env.DB_PASS;
Connection(dbuser,dbpass);

app.use('/',route)

app.get('/',(req,res)=>{
    res.send('hi');
})


const port = 8000;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})