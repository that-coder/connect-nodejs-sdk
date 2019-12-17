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
var Error = require('./Error');
var InventoryAdjustment = require('./InventoryAdjustment');




/**
 * The RetrieveInventoryAdjustmentResponse model module.
 * @module model/RetrieveInventoryAdjustmentResponse
 */

/**
 * Constructs a new <code>RetrieveInventoryAdjustmentResponse</code>.
 *
 * @alias module:model/RetrieveInventoryAdjustmentResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveInventoryAdjustmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveInventoryAdjustmentResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveInventoryAdjustmentResponse} The populated <code>RetrieveInventoryAdjustmentResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('adjustment')) {
      obj['adjustment'] = InventoryAdjustment.constructFromObject(data['adjustment']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The requested `InventoryAdjustment`.
 * @member {module:model/InventoryAdjustment} adjustment
 */
exports.prototype['adjustment'] = undefined;



module.exports = exports;



