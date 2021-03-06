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
 * The OrderSource model module.
 * @module model/OrderSource
 */

/**
 * Constructs a new <code>OrderSource</code>.
 * Represents the origination details of an order.
 * @alias module:model/OrderSource
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>OrderSource</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderSource} obj Optional instance to populate.
 * @return {module:model/OrderSource} The populated <code>OrderSource</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    }
  return obj;
}

/**
 * The name used to identify the place (physical or digital) that an order originates. If unset, the name defaults to the name of the application that created the order.
 * @member {String} name
 */
exports.prototype['name'] = undefined;



module.exports = exports;



