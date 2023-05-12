const express=require('express');
const dotenv=require('dotenv').config();
const connectDB=require('./config/dbConnection');
const cors=require("cors");


connectDB();
const app = express();
const port=process.env.PORT||8001;

app.use(express.json());
app.use(cors());
app.use('/api/mails', require('./router/mailRouter'));


app.listen(port, ()=>{
	console.log("location:8000");
})