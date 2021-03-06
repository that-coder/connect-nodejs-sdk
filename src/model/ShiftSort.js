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
 * The ShiftSort model module.
 * @module model/ShiftSort
 */

/**
 * Constructs a new <code>ShiftSort</code>.
 * Sets the sort order of search results.
 * @alias module:model/ShiftSort
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ShiftSort</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ShiftSort} obj Optional instance to populate.
 * @return {module:model/ShiftSort} The populated <code>ShiftSort</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
      obj['field'] = ApiClient.convertToType(data['field'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
    }
  return obj;
}

/**
 * The field to sort on. See [ShiftSortField](#type-shiftsortfield) for possible values
 * @member {String} field
 */
exports.prototype['field'] = undefined;
/**
 * The order in which results are returned. Defaults to DESC. See [SortOrder](#type-sortorder) for possible values
 * @member {String} order
 */
exports.prototype['order'] = undefined;



module.exports = exports;



