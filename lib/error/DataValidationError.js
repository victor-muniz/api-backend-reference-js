const GenericError = require('../error/GenericError')

class DataValidationError extends GenericError {
    constructor(message, errorCode,  statusCode) {
        super(JSON.stringify(message), errorCode, statusCode = 400)
     }
  }

  module.exports = DataValidationError  
  