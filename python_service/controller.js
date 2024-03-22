const {exec} = require('child_process');
const  modifyScript  = require('./modifierScript');

const pythonScriptPath = './python_service/script.py'

const scriptRunner = (data)=> {
    modifyScript(data)
    exec(`python ${pythonScriptPath}`,(error,stdout,stderr)=>{
        if(error){
            console.error(error);
            return;
        }
        if(stderr){
            console.error(`Script Error: ${stderr}`)
        }
        console.log(`Script Result: ${stdout}`);
    })
}
module.exports = scriptRunner