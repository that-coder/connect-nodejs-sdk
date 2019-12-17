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
var AdditionalRecipientReceivable = require('./AdditionalRecipientReceivable');
var Error = require('./Error');




/**
 * @deprecated
 * The ListAdditionalRecipientReceivablesResponse model module.
 * @module model/ListAdditionalRecipientReceivablesResponse
 */

/**
 * Constructs a new <code>ListAdditionalRecipientReceivablesResponse</code>.
 * Defines the fields that are included in the response body of a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.  One of &#x60;errors&#x60; or &#x60;additional_recipient_receivables&#x60; is present in a given response (never both).
 * @alias module:model/ListAdditionalRecipientReceivablesResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListAdditionalRecipientReceivablesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListAdditionalRecipientReceivablesResponse} obj Optional instance to populate.
 * @return {module:model/ListAdditionalRecipientReceivablesResponse} The populated <code>ListAdditionalRecipientReceivablesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('receivables')) {
      obj['receivables'] = ApiClient.convertToType(data['receivables'], [AdditionalRecipientReceivable]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * An array of AdditionalRecipientReceivables that match your query.
 * @member {Array.<module:model/AdditionalRecipientReceivable>} receivables
 */
exports.prototype['receivables'] = undefined;
/**
 * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor` parameter in a subsequent request to this endpoint.  See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



