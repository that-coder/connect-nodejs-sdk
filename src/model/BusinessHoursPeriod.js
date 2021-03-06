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
 * The BusinessHoursPeriod model module.
 * @module model/BusinessHoursPeriod
 */

/**
 * Constructs a new <code>BusinessHoursPeriod</code>.
 * Represents a period of time during which a business location is open.
 * @alias module:model/BusinessHoursPeriod
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>BusinessHoursPeriod</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BusinessHoursPeriod} obj Optional instance to populate.
 * @return {module:model/BusinessHoursPeriod} The populated <code>BusinessHoursPeriod</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('day_of_week')) {
      obj['day_of_week'] = ApiClient.convertToType(data['day_of_week'], 'String');
    }
      if (data.hasOwnProperty('start_local_time')) {
      obj['start_local_time'] = ApiClient.convertToType(data['start_local_time'], 'String');
    }
      if (data.hasOwnProperty('end_local_time')) {
      obj['end_local_time'] = ApiClient.convertToType(data['end_local_time'], 'String');
    }
    }
  return obj;
}

/**
 * The day of week for this time period. See [DayOfWeek](#type-dayofweek) for possible values
 * @member {String} day_of_week
 */
exports.prototype['day_of_week'] = undefined;
/**
 * The start time of a business hours period, specified in local time using partial-time RFC3339 format.
 * @member {String} start_local_time
 */
exports.prototype['start_local_time'] = undefined;
/**
 * The end time of a business hours period, specified in local time using partial-time RFC3339 format.
 * @member {String} end_local_time
 */
exports.prototype['end_local_time'] = undefined;



module.exports = exports;



