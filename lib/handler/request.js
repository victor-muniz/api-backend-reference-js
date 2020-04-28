const properties = {};
/**
 * @module handle
 * 
 */
/** contain the data request */
class Request {

    /** @constructs
     * @param {string} event - data recived from client
     */
    constructor(event) {
        properties['event'] = event;
    }
    /**
     * retorna o evento recebido na solicitação
     */
    getEvent() {
        return properties['event'];
    };




}

module.exports = Request;

