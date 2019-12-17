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
 * Enum class MeasurementUnitUnitType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "TYPE_CUSTOM"
   * @const
   */
  "CUSTOM": "TYPE_CUSTOM",
  /**
   * value: "TYPE_AREA"
   * @const
   */
  "AREA": "TYPE_AREA",
  /**
   * value: "TYPE_LENGTH"
   * @const
   */
  "LENGTH": "TYPE_LENGTH",
  /**
   * value: "TYPE_VOLUME"
   * @const
   */
  "VOLUME": "TYPE_VOLUME",
  /**
   * value: "TYPE_WEIGHT"
   * @const
   */
  "WEIGHT": "TYPE_WEIGHT",
  /**
   * value: "TYPE_GENERIC"
   * @const
   */
  "GENERIC": "TYPE_GENERIC"};

/**
 * Returns a <code>MeasurementUnitUnitType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/MeasurementUnitUnitType} The enum <code>MeasurementUnitUnitType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


