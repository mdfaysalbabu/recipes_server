const express=require("express");
const app=express();
const cors=require("cors");
const chef=require("./data/chefdata.json")
const viewdetails=require("./data/recipes.json")
const port=process.env.PORT ||5000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send("chef is running")
})

app.get("/chef",(req,res)=>{
    res.send(chef);
})
app.get("/viewdetails",(req,res)=>{
    res.send(viewdetails);
})
app.get("/viewdetails/:id",(req,res)=>{
    const id=req.params.id 
    const detail=viewdetails.find((pd)=>pd.id===id);
    res.send(detail)
})


app.listen(port,()=>{
    console.log(`chef is running port:${port}`)
})