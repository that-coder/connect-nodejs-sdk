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
var CustomerFilter = require('./CustomerFilter');
var CustomerSort = require('./CustomerSort');




/**
 * The CustomerQuery model module.
 * @module model/CustomerQuery
 */

/**
 * Constructs a new <code>CustomerQuery</code>.
 * Represents a query (filtering and sorting criteria) used to search for customer profiles.
 * @alias module:model/CustomerQuery
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerQuery} obj Optional instance to populate.
 * @return {module:model/CustomerQuery} The populated <code>CustomerQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
      obj['filter'] = CustomerFilter.constructFromObject(data['filter']);
    }
      if (data.hasOwnProperty('sort')) {
      obj['sort'] = CustomerSort.constructFromObject(data['sort']);
    }
    }
  return obj;
}

/**
 * A list of filter criteria.
 * @member {module:model/CustomerFilter} filter
 */
exports.prototype['filter'] = undefined;
/**
 * Sort criteria for query results. The default sort behavior is to order customers alphabetically by `given_name` and `last_name`.
 * @member {module:model/CustomerSort} sort
 */
exports.prototype['sort'] = undefined;



module.exports = exports;



