const express = require('express');
const app = express();

app.use('/',function (req,res){
    res.send('hello this is api_graph')
})

app.listen(3001,()=>{
    console.log('listening on port 3001');
})
