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
 * Enum class V1UpdateOrderRequestAction.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "COMPLETE"
   * @const
   */
  "COMPLETE": "COMPLETE",
  /**
   * value: "CANCEL"
   * @const
   */
  "CANCEL": "CANCEL",
  /**
   * value: "REFUND"
   * @const
   */
  "REFUND": "REFUND"};

/**
 * Returns a <code>V1UpdateOrderRequestAction</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1UpdateOrderRequestAction} The enum <code>V1UpdateOrderRequestAction</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


