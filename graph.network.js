const express       = require('express');
const router        = express.Router();
const scriptRunner  = require('./python_service/controller');
const path          = require('path')
const fs = require('fs');

router.get('/',(req,res)=>{
    res.send('get a /api/graph')
})

router.post('/',(req,res)=>{
    scriptRunner(req.body)
    const options = {
        root: path.join(__dirname)
    }
    setTimeout(()=>{
        res.sendFile('web_service.png',options,function (err) {
            if (err) {
                console.error('Error sending file:', err);
                res.sendFile('error.png',options,function (err) {
                    console.log(err);
                })
            } else {
                console.log('Sent:', 'web_service.png');
                if (fs.existsSync('./web_service.png')) {
                    fs.unlink('./web_service.png', (error) => {
                        if (error) {
                            console.error('Error al intentar eliminar el archivo:', error);
                        } else {
                            console.log('Archivo eliminado correctamente.');
                        }
                    });
                }
            }
        })
    },200)
})

module.exports = router;