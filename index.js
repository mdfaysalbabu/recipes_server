const express=require("express");
const app=express();
const cors=require("cors");
const chef=require("./data/chefdata.json")
const port=process.env.PORT ||5000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send(chef)
})

app.get("/chef",(req,res)=>{
    res.send(chef);
})

app.get("/viewdetails/:id",(req,res)=>{
    const id=req.params.id 
    const detail=chef.find((pd)=>pd.id===id);
    res.send(detail)
})


app.listen(port,()=>{
    console.log(`chef is running port:${port}`)
})