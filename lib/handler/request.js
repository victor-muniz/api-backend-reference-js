const Joi = require('joi');
const properties = {};
/**
 * @module handle
 * 
 */
/**
 *
 *
 * @class Request
 */
class Request {

    /** @constructs
     * @param {string} event - event received from client
     * @param {Joi} validationRule - rules to validate the event received
     */
    constructor(event, validationRule) {
        properties['event'] = event;
        properties['validationRule'] = validationRule;
    }
    /**
     * Return event received from resquest
     * @memberof Request
     */
    getEvent() {
        return properties['event'];
    };

    /**
     * Validate the event received
     *
     * @memberof Request
     */
    validate() {

    }
    /**
     * Return an object literal by name
     *
     * @param {string} name Name of Object Literal
     * @returns {Object} Object Literal with comma-separated list of name-value pairs wrapped in curly braces.
     * @memberof Request
     */
    getObjectByName(name) {
        return null;

    }






}

module.exports = Request;

