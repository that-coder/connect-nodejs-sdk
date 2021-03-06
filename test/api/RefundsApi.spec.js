const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

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

describe('RefundsApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    // Some APIs do not work with sandbox. Replace `sandbox` with `production` for those test suites.
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api  = new SquareConnect.RefundsApi();
  });

  afterEach(function(){
  });

  describe('RefundsApi', function() {
    describe('getPaymentRefund', function() {
      it('should call getPaymentRefund successfully', function(done) {
        //uncomment below and update the code to test getPaymentRefund
        //instance.getPaymentRefund(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPaymentRefunds', function() {
      it('should call listPaymentRefunds successfully', function(done) {
        //uncomment below and update the code to test listPaymentRefunds
        //instance.listPaymentRefunds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refundPayment', function() {
      it('should call refundPayment successfully', function(done) {
        //uncomment below and update the code to test refundPayment
        //instance.refundPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
