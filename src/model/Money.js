/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.20191217.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The Money model module.
 * @module model/Money
 */

/**
 * Constructs a new <code>Money</code>.
 * Represents an amount of money. &#x60;Money&#x60; fields can be signed or unsigned. Fields that do not explicitly define whether they are signed or unsigned are considered unsigned and can only hold positive amounts. For signed fields, the sign of the value indicates the purpose of the money transfer. See [Working with Monetary Amounts](/build-basics/working-with-monetary-amounts) for more information.
 * @alias module:model/Money
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Money} obj Optional instance to populate.
 * @return {module:model/Money} The populated <code>Money</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
      obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
    }
      if (data.hasOwnProperty('currency')) {
      obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
    }
    }
  return obj;
}

/**
 * The amount of money, in the smallest denomination of the currency indicated by `currency`. For example, when `currency` is `USD`, `amount` is in cents. Monetary amounts can be positive or negative. See the specific field description to determine the meaning of the sign in a particular case.
 * @member {Number} amount
 */
exports.prototype['amount'] = undefined;
/**
 * The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is `USD`.  See `Currency` for possible values. See [Currency](#type-currency) for possible values
 * @member {String} currency
 */
exports.prototype['currency'] = undefined;



module.exports = exports;



