const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors')

app.use( cors() )
app.use(express.text());
router(app);

app.listen(3001,()=>{
    console.log('listening on port 3001');
})
