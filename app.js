const express= require('express');
const app= express();
const path= require('path')

app.use(express.static(path.join(__dirname,'./public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})

const puerto = process.env.PORT || 3000

app.listen(puerto,()=>
    console.log(`el puerto ${puerto} esta corriendo`)
)