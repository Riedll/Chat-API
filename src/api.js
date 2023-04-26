var express = require("express");
var app = express();
console.log(app);
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res)=>{
    res.status(200).send({
        "nome":"API - CHAT",
        "versão" :"0.1.0",
        "autor" :"Lucas Riedl",
        
    })
}))

module.exports=app;
