const fs = require('fs');

function modifyScript(data) {
    let modifiedData = data.replace(/Diagram\("[^"]*"/, 'Diagram("web service"')
    fs.writeFile('./python_service/script.py', modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
        }
        console.log('Archivo modificado correctamente.');
    });
}
// function addImports(data) {
//     return 'from diagrams import Diagram\nfrom diagrams.aws.compute import EC2\nfrom diagrams.aws.database import RDS\nfrom diagrams.aws.network import ELB\n'+data;
// }

module.exports = modifyScript