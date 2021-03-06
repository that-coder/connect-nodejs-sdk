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
 * @deprecated
 * The V1Category model module.
 * @module model/V1Category
 */

/**
 * Constructs a new <code>V1Category</code>.
 * V1Category
 * @alias module:model/V1Category
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>V1Category</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Category} obj Optional instance to populate.
 * @return {module:model/V1Category} The populated <code>V1Category</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('v2_id')) {
      obj['v2_id'] = ApiClient.convertToType(data['v2_id'], 'String');
    }
    }
  return obj;
}

/**
 * The category's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The category's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
 * @member {String} v2_id
 */
exports.prototype['v2_id'] = undefined;



module.exports = exports;



