const Request = require('./lib/handler/request')
const req = new Request("Evento");
console.log('req', req,  req.getEvent());