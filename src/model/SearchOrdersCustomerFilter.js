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
 * The SearchOrdersCustomerFilter model module.
 * Note: This model is in beta.
 * @module model/SearchOrdersCustomerFilter
 */

/**
 * Constructs a new <code>SearchOrdersCustomerFilter</code>.
 * Filter based on Order &#x60;customer_id&#x60; and any Tender &#x60;customer_id&#x60; associated with the Order. Does not filter based on the [FulfillmentRecipient](#type-orderfulfillmentrecipient) &#x60;customer_id&#x60;.
 * @alias module:model/SearchOrdersCustomerFilter
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>SearchOrdersCustomerFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersCustomerFilter} obj Optional instance to populate.
 * @return {module:model/SearchOrdersCustomerFilter} The populated <code>SearchOrdersCustomerFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('customer_ids')) {
      obj['customer_ids'] = ApiClient.convertToType(data['customer_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * List of customer IDs to filter by.  Max: 10 customer IDs.
 * @member {Array.<String>} customer_ids
 */
exports.prototype['customer_ids'] = undefined;



module.exports = exports;



