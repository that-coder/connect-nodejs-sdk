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
 * The CatalogModifierOverride model module.
 * @module model/CatalogModifierOverride
 */

/**
 * Constructs a new <code>CatalogModifierOverride</code>.
 *
 * @alias module:model/CatalogModifierOverride
 * @class
 * @param modifierId {String} The ID of the `CatalogModifier` whose default behavior is being overridden.
 */
var exports = function(modifierId) {
  var _this = this;

  _this['modifier_id'] = modifierId;

};

/**
 * Constructs a <code>CatalogModifierOverride</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogModifierOverride} obj Optional instance to populate.
 * @return {module:model/CatalogModifierOverride} The populated <code>CatalogModifierOverride</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('modifier_id')) {
      obj['modifier_id'] = ApiClient.convertToType(data['modifier_id'], 'String');
    }
      if (data.hasOwnProperty('on_by_default')) {
      obj['on_by_default'] = ApiClient.convertToType(data['on_by_default'], 'Boolean');
    }
    }
  return obj;
}

/**
 * The ID of the `CatalogModifier` whose default behavior is being overridden.
 * @member {String} modifier_id
 */
exports.prototype['modifier_id'] = undefined;
/**
 * If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`.
 * @member {Boolean} on_by_default
 */
exports.prototype['on_by_default'] = undefined;



module.exports = exports;



