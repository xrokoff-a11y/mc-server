const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('Server Running');
});

app.get('/health',(req,res)=>{
  res.send('OK');
});

app.post('/create-server',(req,res)=>{
  console.log("Server:", req.body.name);
  res.send('Minecraft server created');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("Running on "+PORT));
