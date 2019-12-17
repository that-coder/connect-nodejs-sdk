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
var Address = require('./Address');
var Money = require('./Money');




/**
 * The CreatePaymentRequest model module.
 * @module model/CreatePaymentRequest
 */

/**
 * Constructs a new <code>CreatePaymentRequest</code>.
 * Creates a payment from the source (nonce, card on file, etc.)  The &#x60;PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS&#x60; OAuth permission is required to enable application fees.  For more information, see [Payments and Refunds Overview](/payments-api/overview).  For information about application fees in a payment, see  [Collect Fees](/payments-api/take-payments-and-collect-fees).
 * @alias module:model/CreatePaymentRequest
 * @class
 * @param sourceId {String} The ID for the source of funds for this payment.  This can be a nonce generated by the Payment Form or a card on file made with the Customers API.
 * @param idempotencyKey {String} A unique string that identifies this CreatePayment request. Keys can be any valid string but must be unique for every CreatePayment request.   Max: 45 characters  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 * @param amountMoney {module:model/Money} The amount of money to accept for this payment, not including `tip_money`.  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The currency code must match the currency associated with the business that is accepting the payment.
 */
var exports = function(sourceId, idempotencyKey, amountMoney) {
  var _this = this;

  _this['source_id'] = sourceId;
  _this['idempotency_key'] = idempotencyKey;
  _this['amount_money'] = amountMoney;














};

/**
 * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreatePaymentRequest} obj Optional instance to populate.
 * @return {module:model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('source_id')) {
      obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
    }
      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('tip_money')) {
      obj['tip_money'] = Money.constructFromObject(data['tip_money']);
    }
      if (data.hasOwnProperty('app_fee_money')) {
      obj['app_fee_money'] = Money.constructFromObject(data['app_fee_money']);
    }
      if (data.hasOwnProperty('autocomplete')) {
      obj['autocomplete'] = ApiClient.convertToType(data['autocomplete'], 'Boolean');
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
      if (data.hasOwnProperty('customer_id')) {
      obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('verification_token')) {
      obj['verification_token'] = ApiClient.convertToType(data['verification_token'], 'String');
    }
      if (data.hasOwnProperty('accept_partial_authorization')) {
      obj['accept_partial_authorization'] = ApiClient.convertToType(data['accept_partial_authorization'], 'Boolean');
    }
      if (data.hasOwnProperty('buyer_email_address')) {
      obj['buyer_email_address'] = ApiClient.convertToType(data['buyer_email_address'], 'String');
    }
      if (data.hasOwnProperty('billing_address')) {
      obj['billing_address'] = Address.constructFromObject(data['billing_address']);
    }
      if (data.hasOwnProperty('shipping_address')) {
      obj['shipping_address'] = Address.constructFromObject(data['shipping_address']);
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('statement_description_identifier')) {
      obj['statement_description_identifier'] = ApiClient.convertToType(data['statement_description_identifier'], 'String');
    }
    }
  return obj;
}

/**
 * The ID for the source of funds for this payment.  This can be a nonce generated by the Payment Form or a card on file made with the Customers API.
 * @member {String} source_id
 */
exports.prototype['source_id'] = undefined;
/**
 * A unique string that identifies this CreatePayment request. Keys can be any valid string but must be unique for every CreatePayment request.   Max: 45 characters  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The amount of money to accept for this payment, not including `tip_money`.  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The currency code must match the currency associated with the business that is accepting the payment.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount designated as a tip, in addition to `amount_money`  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The currency code must match the currency associated with the business that is accepting the payment.
 * @member {module:model/Money} tip_money
 */
exports.prototype['tip_money'] = undefined;
/**
 * The amount of money the developer is taking as a fee for facilitating the payment on behalf of the seller.  Cannot be more than 90% of the total amount of the Payment.  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The fee currency code must match the currency associated with the merchant that is accepting the payment. The application must be from a developer  account in the same country as the merchant.  For more information about the application fee scenario, see   [Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
 * @member {module:model/Money} app_fee_money
 */
exports.prototype['app_fee_money'] = undefined;
/**
 * If set to `true`, this payment will be completed when possible. If set to `false`, this payment will be held in an approved state until either explicitly completed (captured) or canceled (voided). For more information, see  [Delayed Payments](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).  Default: true
 * @member {Boolean} autocomplete
 */
exports.prototype['autocomplete'] = undefined;
/**
 * Associate a previously created order with this payment
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;
/**
 * The ID of the customer associated with the payment. Required if the `source_id` refers to a card on file created using the Customers API.
 * @member {String} customer_id
 */
exports.prototype['customer_id'] = undefined;
/**
 * The location ID to associate with the payment. If not specified, the default location is used.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * A user-defined ID to associate with the payment. You can use this field to associate the payment to an entity in an external system. For example, you might specify an order ID that is generated by a third-party shopping cart.  Limit 40 characters.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.  See the [SCA Overview](https://developer.squareup.com/docs/sca-overview).
 * @member {String} verification_token
 */
exports.prototype['verification_token'] = undefined;
/**
 * If set to true and charging a Square Gift Card, a payment may be returned with amount_money equal to less than what was requested.  Example, a request for $20 when charging a Square Gift Card with balance of $5 wil result in an APPROVED payment of $5.  You may choose to prompt the buyer for an additional payment to cover the remainder, or cancel the gift card payment.  Cannot be `true` when `autocomplete = true`.  For more information, see  [Partial amount with Square gift cards](https://developer.squareup.com/docs/payments-api/take-payments#partial-payment-gift-card).  Default: false
 * @member {Boolean} accept_partial_authorization
 */
exports.prototype['accept_partial_authorization'] = undefined;
/**
 * The buyer's e-mail address
 * @member {String} buyer_email_address
 */
exports.prototype['buyer_email_address'] = undefined;
/**
 * The buyer's billing address.
 * @member {module:model/Address} billing_address
 */
exports.prototype['billing_address'] = undefined;
/**
 * The buyer's shipping address.
 * @member {module:model/Address} shipping_address
 */
exports.prototype['shipping_address'] = undefined;
/**
 * An optional note to be entered by the developer when creating a payment  Limit 500 characters.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * Optional additional payment information to include on the customer's card statement as part of statement description. This can be, for example, an invoice number, ticket number, or short description that uniquely identifies the purchase.  Limit 20 characters.  Note that the statement_description_identifier may get truncated on the statement description to fit the required information including the Square identifier (SQ *) and name of the merchant taking the payment.
 * @member {String} statement_description_identifier
 */
exports.prototype['statement_description_identifier'] = undefined;



module.exports = exports;



