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
var Location = require('./Location');




/**
 * The UpdateLocationRequest model module.
 * Note: This model is in beta.
 * @module model/UpdateLocationRequest
 */

/**
 * Constructs a new <code>UpdateLocationRequest</code>.
 * Request object for the [UpdateLocation](#endpoint-updatelocation) endpoint.
 * @alias module:model/UpdateLocationRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>UpdateLocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateLocationRequest} obj Optional instance to populate.
 * @return {module:model/UpdateLocationRequest} The populated <code>UpdateLocationRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location')) {
      obj['location'] = Location.constructFromObject(data['location']);
    }
    }
  return obj;
}

/**
 * The `Location` object with only the fields to update.
 * @member {module:model/Location} location
 */
exports.prototype['location'] = undefined;



module.exports = exports;



