const express=require('express');
const cors=require('cors');
const bodyParser =require('body-parser')
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact');
  console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    username: String,
    email:String
  });
  const User = mongoose.model('User', userSchema);2

const server =express();
server.use(cors());
server.use(bodyParser.json());
server.post('/contact',async (req,res)=>{
    let user =new User();
    user.username=req.body.username;
    user.email=req.body.email;
    const doc=await user.save();
    console.log(doc);
    res.json(doc);

})
server.listen(8080,()=>{
    console.log('server started')
})
