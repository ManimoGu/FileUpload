const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const fileupload = require("express-fileupload")


const app = express()

app.listen(9000, ()=>console.log("server running on port 9000"))

app.use(bodyParser.json())
app.use(cors())
app.use(fileupload())
app.use(bodyParser.urlencoded( {limit: "50mb", extended : true, parameterLimit: 50000}))

app.post("/getfile", (req,res)=>{

   
    const file = req.files.image



    const path = `${__dirname}\\${file.name}`

    file.mv(path, (err)=>{
       if(err){
        console.log(err)
       }else{
        console.log("file created")
       }
    })

})