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
 * Enum class V1CashDrawerEventEventType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "NO_SALE"
   * @const
   */
  "NO_SALE": "NO_SALE",
  /**
   * value: "CASH_TENDER_PAYMENT"
   * @const
   */
  "CASH_TENDER_PAYMENT": "CASH_TENDER_PAYMENT",
  /**
   * value: "OTHER_TENDER_PAYMENT"
   * @const
   */
  "OTHER_TENDER_PAYMENT": "OTHER_TENDER_PAYMENT",
  /**
   * value: "CASH_TENDER_CANCELED_PAYMENT"
   * @const
   */
  "CASH_TENDER_CANCELED_PAYMENT": "CASH_TENDER_CANCELED_PAYMENT",
  /**
   * value: "OTHER_TENDER_CANCELED_PAYMENT"
   * @const
   */
  "OTHER_TENDER_CANCELED_PAYMENT": "OTHER_TENDER_CANCELED_PAYMENT",
  /**
   * value: "CASH_TENDER_REFUND"
   * @const
   */
  "CASH_TENDER_REFUND": "CASH_TENDER_REFUND",
  /**
   * value: "OTHER_TENDER_REFUND"
   * @const
   */
  "OTHER_TENDER_REFUND": "OTHER_TENDER_REFUND",
  /**
   * value: "PAID_IN"
   * @const
   */
  "PAID_IN": "PAID_IN",
  /**
   * value: "PAID_OUT"
   * @const
   */
  "PAID_OUT": "PAID_OUT"};

/**
 * Returns a <code>V1CashDrawerEventEventType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1CashDrawerEventEventType} The enum <code>V1CashDrawerEventEventType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


