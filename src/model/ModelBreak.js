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
 * The ModelBreak model module.
 * @module model/ModelBreak
 */

/**
 * Constructs a new <code>ModelBreak</code>.
 * A record of an employee&#39;s break during a shift.
 * @alias module:model/ModelBreak
 * @class
 * @param startAt {String} RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
 * @param breakTypeId {String} The `BreakType` this `Break` was templated on.
 * @param name {String} A human-readable name.
 * @param expectedDuration {String} Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
 * @param isPaid {Boolean} Whether this break counts towards time worked for compensation purposes.
 */
var exports = function(startAt, breakTypeId, name, expectedDuration, isPaid) {
  var _this = this;


  _this['start_at'] = startAt;

  _this['break_type_id'] = breakTypeId;
  _this['name'] = name;
  _this['expected_duration'] = expectedDuration;
  _this['is_paid'] = isPaid;
};

/**
 * Constructs a <code>ModelBreak</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ModelBreak} obj Optional instance to populate.
 * @return {module:model/ModelBreak} The populated <code>ModelBreak</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('start_at')) {
      obj['start_at'] = ApiClient.convertToType(data['start_at'], 'String');
    }
      if (data.hasOwnProperty('end_at')) {
      obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
    }
      if (data.hasOwnProperty('break_type_id')) {
      obj['break_type_id'] = ApiClient.convertToType(data['break_type_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('expected_duration')) {
      obj['expected_duration'] = ApiClient.convertToType(data['expected_duration'], 'String');
    }
      if (data.hasOwnProperty('is_paid')) {
      obj['is_paid'] = ApiClient.convertToType(data['is_paid'], 'Boolean');
    }
    }
  return obj;
}

/**
 * UUID for this object
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
 * @member {String} start_at
 */
exports.prototype['start_at'] = undefined;
/**
 * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated. The `end_at` minute is not counted when the break length is calculated. For example, a break from `00:00` to `00:11`  is considered a 10 minute break (midnight to 10 minutes after midnight).
 * @member {String} end_at
 */
exports.prototype['end_at'] = undefined;
/**
 * The `BreakType` this `Break` was templated on.
 * @member {String} break_type_id
 */
exports.prototype['break_type_id'] = undefined;
/**
 * A human-readable name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
 * @member {String} expected_duration
 */
exports.prototype['expected_duration'] = undefined;
/**
 * Whether this break counts towards time worked for compensation purposes.
 * @member {Boolean} is_paid
 */
exports.prototype['is_paid'] = undefined;



module.exports = exports;



