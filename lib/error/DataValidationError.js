const GenericError = require('../error/GenericError')

class DataValidationError extends GenericError {
    constructor(message, status) {
        super(JSON.stringify(message),status)
     }
  }

  module.exports = DataValidationError  
  