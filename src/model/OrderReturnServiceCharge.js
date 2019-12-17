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
var Money = require('./Money');
var OrderLineItemAppliedTax = require('./OrderLineItemAppliedTax');
var OrderReturnTax = require('./OrderReturnTax');




/**
 * The OrderReturnServiceCharge model module.
 * @module model/OrderReturnServiceCharge
 */

/**
 * Constructs a new <code>OrderReturnServiceCharge</code>.
 * Represents the service charge applied to the original order.
 * @alias module:model/OrderReturnServiceCharge
 * @class
 */
var exports = function() {
  var _this = this;














};

/**
 * Constructs a <code>OrderReturnServiceCharge</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderReturnServiceCharge} obj Optional instance to populate.
 * @return {module:model/OrderReturnServiceCharge} The populated <code>OrderReturnServiceCharge</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('source_service_charge_uid')) {
      obj['source_service_charge_uid'] = ApiClient.convertToType(data['source_service_charge_uid'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('calculation_phase')) {
      obj['calculation_phase'] = ApiClient.convertToType(data['calculation_phase'], 'String');
    }
      if (data.hasOwnProperty('taxable')) {
      obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
    }
      if (data.hasOwnProperty('return_taxes')) {
      obj['return_taxes'] = ApiClient.convertToType(data['return_taxes'], [OrderReturnTax]);
    }
      if (data.hasOwnProperty('applied_taxes')) {
      obj['applied_taxes'] = ApiClient.convertToType(data['applied_taxes'], [OrderLineItemAppliedTax]);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the return service charge only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * `uid` of the Service Charge from the Order containing the original charge of the service charge. `source_service_charge_uid` is `null` for unlinked returns.
 * @member {String} source_service_charge_uid
 */
exports.prototype['source_service_charge_uid'] = undefined;
/**
 * The name of the service charge.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The catalog object ID of the associated `CatalogServiceCharge`.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The percentage of the service charge, as a string representation of a decimal number. For example, a value of `\"7.25\"` corresponds to a percentage of 7.25%.  Exactly one of `percentage` or `amount_money` should be set.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The amount of a non-percentage based service charge.  Exactly one of `percentage` or `amount_money` should be set.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated by Square.  - For fixed-amount service charges, `applied_money` is equal to `amount_money`. - For percentage-based service charges, `applied_money` is the money calculated using the percentage.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * The total amount of money to collect for the service charge.  __NOTE__: if an inclusive tax is applied to the service charge, `total_money` does not equal `applied_money` plus `total_tax_money` since the inclusive tax amount will already be included in both `applied_money` and `total_tax_money`.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The total amount of tax money to collect for the service charge.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The calculation phase after which to apply the service charge. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values
 * @member {String} calculation_phase
 */
exports.prototype['calculation_phase'] = undefined;
/**
 * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
 * @member {Boolean} taxable
 */
exports.prototype['taxable'] = undefined;
/**
 * Taxes applied to the `OrderReturnServiceCharge`. By default, return-level taxes apply to `OrderReturnServiceCharge`s calculated in the `SUBTOTAL_PHASE` if `taxable` is set to `true`.  On read or retrieve, this list includes both item-level taxes and any return-level taxes apportioned to this item.  This field has been deprecated in favour of `applied_taxes`.
 * @member {Array.<module:model/OrderReturnTax>} return_taxes
 */
exports.prototype['return_taxes'] = undefined;
/**
 * The list of references to `OrderReturnTax` entities applied to the `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderReturnTax` that is being applied to the `OrderReturnServiceCharge`. On reads, the amount applied is populated.
 * @member {Array.<module:model/OrderLineItemAppliedTax>} applied_taxes
 */
exports.prototype['applied_taxes'] = undefined;



module.exports = exports;



