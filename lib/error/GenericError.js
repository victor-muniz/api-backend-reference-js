class GenericError extends Error {
    constructor(message, errorCode, statusCode = 500, ...params) {
   
      super(message)

      this.name = this.constructor.name;

      Error.captureStackTrace(this, this.constructor);

      this.statusCode = statusCode;
      this.errorCode = errorCode || statusCode;
      this.parms = params || {};

    }
  }

  module.exports = GenericError  
  