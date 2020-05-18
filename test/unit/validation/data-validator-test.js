const { expect } = require('chai');
const Joi = require('joi');

const DataValidator = require('../../../lib/validation/data-validator')

const invalidName = { name: '1233' };

const validName = { name: 'Victor' }

const rule = { name: Joi.string().regex(/^[A-Z]+$/).uppercase() };

describe("validate(data, validationRule, validationOptions)", function () {
    this.timeout(Infinity);

    context('when data and validationRule are not present', function () {
        it("should return exception", async () => {
            expect(() => new DataValidator().validate()).to.throw('Validation data is required!');
        });
    });

    context('when data is present and validationRule is not present', function () {
        it("should return exception", async () => {
            expect(() => new DataValidator().validate(validName)).to.throw('Validation rule is required!');
        });

    });

    context('when valid data and valid validationRule are present', function () {
        it("should return object validated", async () => {
            const validatedData = new DataValidator().validate(validName,rule)
            expect(validatedData).to.eql({ name: 'VICTOR' });
        });

    });
});
