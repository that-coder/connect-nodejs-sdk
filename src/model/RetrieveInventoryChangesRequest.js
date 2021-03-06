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
 * The RetrieveInventoryChangesRequest model module.
 * @module model/RetrieveInventoryChangesRequest
 */

/**
 * Constructs a new <code>RetrieveInventoryChangesRequest</code>.
 *
 * @alias module:model/RetrieveInventoryChangesRequest
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveInventoryChangesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveInventoryChangesRequest} obj Optional instance to populate.
 * @return {module:model/RetrieveInventoryChangesRequest} The populated <code>RetrieveInventoryChangesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_ids')) {
      obj['location_ids'] = ApiClient.convertToType(data['location_ids'], 'String');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
 * @member {String} location_ids
 */
exports.prototype['location_ids'] = undefined;
/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



