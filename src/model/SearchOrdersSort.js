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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The SearchOrdersSort model module.
 * @module model/SearchOrdersSort
 */

/**
 * Constructs a new <code>SearchOrdersSort</code>.
 * Sorting options for a query. Returned Orders will always be sorted on a timestamp.
 * @alias module:model/SearchOrdersSort
 * @class
 * @param sortField {String} The field to sort by.  __Important:__ When using a [DateTimeFilter](#type-searchordersfilter), `sort_field` must match the set time range field. If this field does not match the time range field in `DateTimeFilter`, SearchOrder will return an error.  Default: `CREATED_AT`. See [SearchOrdersSortField](#type-searchorderssortfield) for possible values
 */
var exports = function(sortField) {
  var _this = this;

  _this['sort_field'] = sortField;

};

/**
 * Constructs a <code>SearchOrdersSort</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersSort} obj Optional instance to populate.
 * @return {module:model/SearchOrdersSort} The populated <code>SearchOrdersSort</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('sort_field')) {
      obj['sort_field'] = ApiClient.convertToType(data['sort_field'], 'String');
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
    }
  return obj;
}

/**
 * The field to sort by.  __Important:__ When using a [DateTimeFilter](#type-searchordersfilter), `sort_field` must match the set time range field. If this field does not match the time range field in `DateTimeFilter`, SearchOrder will return an error.  Default: `CREATED_AT`. See [SearchOrdersSortField](#type-searchorderssortfield) for possible values
 * @member {String} sort_field
 */
exports.prototype['sort_field'] = undefined;
/**
 * The order in which results are returned. Defaults to `DESC`. See [SortOrder](#type-sortorder) for possible values
 * @member {String} sort_order
 */
exports.prototype['sort_order'] = undefined;



module.exports = exports;


