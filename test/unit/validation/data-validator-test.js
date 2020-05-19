const { expect } = require('chai');
const Joi = require('joi');

const DataValidationError = require('../../../lib/error/DataValidationError')
const DataValidator = require('../../../lib/validation/data-validator')

const invalidPerson = { name: '1233' };

const validPerson = { name: 'Victor', age: 10 }

const rule = {
    name: Joi.string().regex(/^[A-Z]+$/).uppercase().required(),
    age: Joi.number().integer().min(0).required()
};

describe("DataValidator.validate(data, validationRule, validationOptions)", function () {
    this.timeout(Infinity);

    context('when data and validationRule are not present', function () {
        it("should return an exception", async () => {
            expect(() => new DataValidator().validate()).to.throw(DataValidationError, 'Validation data is required!');
        });
    });

    context('when data is present and validationRule is not present', function () {
        it("should return an exception", async () => {
            expect(() => new DataValidator().validate(validPerson)).to.throw(DataValidationError, 'Validation rule is required!');
        });

    });

    context('when valid data and valid validationRule are present', function () {
        it("should return object validated", async () => {
            const validatedData = new DataValidator().validate(validPerson, rule)
            expect(validatedData).to.eql({ name: 'VICTOR', age: 10 });
        });

    });

    context('when invalid data and valid validationRule are present', function () {
        it("should return an exception", async () => {

            expect(() => new DataValidator().validate(invalidPerson, rule)).to.throw(DataValidationError, '[{"message":"\\"name\\" with value \\"1233\\" fails to match the required pattern: /^[A-Z]+$/","path":["name"],"type":"string.regex.base","context":{"pattern":{},"value":"1233","key":"name","label":"name"}}]');

        });
    });


    context('when invalid data, valid validationRule and custom validationOptions(abortEarly=false) are present', function () {
        it("should return an exception", async () => {
            const customValidationOptions = {
                abortEarly: false,
                allowUnknown: false,
                stripUnknown: false
            };
            expect(() => new DataValidator().validate(invalidPerson, rule, customValidationOptions)).to.throw(DataValidationError, '[{"message":"\\"name\\" with value \\"1233\\" fails to match the required pattern: /^[A-Z]+$/","path":["name"],"type":"string.regex.base","context":{"pattern":{},"value":"1233","key":"name","label":"name"}},{"message":"\\"age\\" is required","path":["age"],"type":"any.required","context":{"key":"age","label":"age"}}]');

        });
    });
});
