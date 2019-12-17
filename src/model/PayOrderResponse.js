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
var Order = require('./Order');




/**
 * The PayOrderResponse model module.
 * Note: This model is in beta.
 * @module model/PayOrderResponse
 */

/**
 * Constructs a new <code>PayOrderResponse</code>.
 * Defines the fields that are included in the response body of a request to the [PayOrder](#endpoint-payorder) endpoint.
 * @alias module:model/PayOrderResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>PayOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/PayOrderResponse} obj Optional instance to populate.
 * @return {module:model/PayOrderResponse} The populated <code>PayOrderResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = Order.constructFromObject(data['order']);
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
 * The paid, updated `order`.
 * @member {module:model/Order} order
 */
exports.prototype['order'] = undefined;



module.exports = exports;



