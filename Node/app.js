const app = require("express")

const router = require("express").Router()


router.use((req,res,err, next)=>{

if()
next()

})



app.get("/",router)

app.listen(3000,()=>{
    console.log("server running")
})
