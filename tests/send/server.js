//WOOT WOOT!!
var StirFry = require('../../stirfry.js');
var server  = new StirFry(8080, '0.0.0.0');
server.get(/.*/, (req, res) => res.send(req.url));
