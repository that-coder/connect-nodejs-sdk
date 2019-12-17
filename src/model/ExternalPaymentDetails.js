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
var Money = require('./Money');




/**
 * The ExternalPaymentDetails model module.
 * @module model/ExternalPaymentDetails
 */

/**
 * Constructs a new <code>ExternalPaymentDetails</code>.
 * Additional details about EXTERNAL type payments.
 * @alias module:model/ExternalPaymentDetails
 * @class
 * @param type {String} The type of External payment which can be one of: CHECK - Paid by a physical check BANK_TRANSFER - Paid by ACH or other bank transfer OTHER_GIFT_CARD - Paid by a non-square gift card CRYPTO - Paid via a crypto currency SQUARE_CASH - Paid via Square Cash app SOCIAL - Venmo, WeChatPay, AliPay, etc. EXTERNAL - A 3rd party application gathered this payment outside of Square EMONEY - A Japanese e-money brand Square doesn’t support CREDIT/DEBIT - A credit/debit card Square doesn’t support OTHER - A type not listed here
 * @param source {String} A description of the source of the external payment, e.g. “Uber Eats”, “Stripe”, “Shopify”.  Limit 255 characters
 */
var exports = function(type, source) {
  var _this = this;

  _this['type'] = type;
  _this['source'] = source;


};

/**
 * Constructs a <code>ExternalPaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ExternalPaymentDetails} obj Optional instance to populate.
 * @return {module:model/ExternalPaymentDetails} The populated <code>ExternalPaymentDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('source')) {
      obj['source'] = ApiClient.convertToType(data['source'], 'String');
    }
      if (data.hasOwnProperty('source_id')) {
      obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
    }
      if (data.hasOwnProperty('source_fee_money')) {
      obj['source_fee_money'] = Money.constructFromObject(data['source_fee_money']);
    }
    }
  return obj;
}

/**
 * The type of External payment which can be one of: CHECK - Paid by a physical check BANK_TRANSFER - Paid by ACH or other bank transfer OTHER_GIFT_CARD - Paid by a non-square gift card CRYPTO - Paid via a crypto currency SQUARE_CASH - Paid via Square Cash app SOCIAL - Venmo, WeChatPay, AliPay, etc. EXTERNAL - A 3rd party application gathered this payment outside of Square EMONEY - A Japanese e-money brand Square doesn’t support CREDIT/DEBIT - A credit/debit card Square doesn’t support OTHER - A type not listed here
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * A description of the source of the external payment, e.g. “Uber Eats”, “Stripe”, “Shopify”.  Limit 255 characters
 * @member {String} source
 */
exports.prototype['source'] = undefined;
/**
 * An ID to associate this payment to its originating source  Limit 255 characters.
 * @member {String} source_id
 */
exports.prototype['source_id'] = undefined;
/**
 * The total of fees paid to the source. (amount_money - source_fee_money) = net money to the merchant
 * @member {module:model/Money} source_fee_money
 */
exports.prototype['source_fee_money'] = undefined;



module.exports = exports;



