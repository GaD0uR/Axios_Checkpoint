const express=require("express");
const axios=require("axios");
const app=express();

const api1='http://api.openweathermap.org/data/2.5/weather?q=Italie&appid=9a6310bb40a77ad5d506c3344929b090'
const api2='http://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=9a6310bb40a77ad5d506c3344929b090'
const api3 = 'http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=9a6310bb40a77ad5d506c3344929b090'
const api4='http://api.openweathermap.org/data/2.5/weather?q=London&appid=9a6310bb40a77ad5d506c3344929b090'


app.get('/Italie',(req,res)=>{
    axios.get(api1)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/Sacramento',(req,res)=>{
    axios.get(api2)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/Boston',(req,res)=>{
    axios.get(api3)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})

app.get('/London',(req,res)=>{
    axios.get(api4)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})


app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running on port 3000");
  }
});

