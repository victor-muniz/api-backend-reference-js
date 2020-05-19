const Joi = require('joi');
const DataValidationError = require('../error/DataValidationError')

/**
 * Joi validation options:
 * abortEarly => abort after the last validation error
 * allowUnknown => allow unknown keys that will be ignored
 * stripUnknown =>  remove unknown keys from the validated data
 * @property defaultValidationOptions
*/
const defaultValidationOptions = {
    abortEarly: true,
    allowUnknown: false,
    stripUnknown: false
};

/**
 *
 *
 * @class DataValidator
 */
class DataValidator {
    /**
     * Validate the data based on rules
     *
     * @param {*} data data to be validated
     * @param {*} validationRule validation rule
     * @param {*} validationOptions validation options {@see defaultValidationOptions}
     * @returns validated data
     * @memberof DataValidator
     */
    validate(data, validationRule, validationOptions) {
        if (!data) {
            throw new DataValidationError("Validation data is required!")
        }

        if (!validationRule) {
            throw new DataValidationError("Validation rule is required!")
        }

        if (!validationOptions) {
            validationOptions = { ...defaultValidationOptions }
        }
        return Joi.validate(data, validationRule, validationOptions, (err, validateData) => {
      
            if (err) {
                throw new DataValidationError(err.details)
            } else {
                return validateData;
            }
        })
    }

}

module.exports = DataValidator;