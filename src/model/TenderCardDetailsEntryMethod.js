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
 * Enum class TenderCardDetailsEntryMethod.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "SWIPED"
   * @const
   */
  "SWIPED": "SWIPED",
  /**
   * value: "KEYED"
   * @const
   */
  "KEYED": "KEYED",
  /**
   * value: "EMV"
   * @const
   */
  "EMV": "EMV",
  /**
   * value: "ON_FILE"
   * @const
   */
  "ON_FILE": "ON_FILE",
  /**
   * value: "CONTACTLESS"
   * @const
   */
  "CONTACTLESS": "CONTACTLESS"};

/**
 * Returns a <code>TenderCardDetailsEntryMethod</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/TenderCardDetailsEntryMethod} The enum <code>TenderCardDetailsEntryMethod</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


