const express=require('express');
const MediaRoutes=require('./src/routes');
const app=express();
const port =3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})
//http://localhost:3000/photos/ad.jpg
//http://localhost:3000/audio/KHEL_MANDALA.mp3
app.use("/photos",express.static('images')) 
app.use("/audio",express.static('songs'))
app.use("/api/v1/media",MediaRoutes);


app.listen(port,()=>{console.log( `app listening on port http://localhost:${port}`)})