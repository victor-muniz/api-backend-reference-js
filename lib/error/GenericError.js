class GenericError extends Error {
    constructor(message, status = 500, ...params) {
   
      super(message)

      this.name = this.constructor.name;

      Error.captureStackTrace(this, this.constructor);

      this.status = status;
      this.parms = params || {};
    }
  }

  module.exports = GenericError  
  