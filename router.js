const graphs = require('./graph.network');

const routes = function(server){
    server.use('/api/graph',graphs);
}

module.exports = routes