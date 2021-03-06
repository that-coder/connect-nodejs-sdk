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
 * The RetrieveCashDrawerShiftRequest model module.
 * Note: This model is in beta.
 * @module model/RetrieveCashDrawerShiftRequest
 */

/**
 * Constructs a new <code>RetrieveCashDrawerShiftRequest</code>.
 *
 * @alias module:model/RetrieveCashDrawerShiftRequest
 * @class
 * @param locationId {String} The ID of the location to retrieve cash drawer shifts from.
 */
var exports = function(locationId) {
  var _this = this;

  _this['location_id'] = locationId;
};

/**
 * Constructs a <code>RetrieveCashDrawerShiftRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveCashDrawerShiftRequest} obj Optional instance to populate.
 * @return {module:model/RetrieveCashDrawerShiftRequest} The populated <code>RetrieveCashDrawerShiftRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
    }
  return obj;
}

/**
 * The ID of the location to retrieve cash drawer shifts from.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;



module.exports = exports;



