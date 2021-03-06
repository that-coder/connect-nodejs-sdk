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
var V1Fee = require('./V1Fee');




/**
 * @deprecated
 * The V1ListFeesResponse model module.
 * @module model/V1ListFeesResponse
 */

/**
 * Constructs a new <code>V1ListFeesResponse</code>.
 *
 * @alias module:model/V1ListFeesResponse
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1ListFeesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListFeesResponse} obj Optional instance to populate.
 * @return {module:model/V1ListFeesResponse} The populated <code>V1ListFeesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
      obj['items'] = ApiClient.convertToType(data['items'], [V1Fee]);
    }
    }
  return obj;
}

/**
 *
 * @member {Array.<module:model/V1Fee>} items
 */
exports.prototype['items'] = undefined;



module.exports = exports;



