'use strict';

describe('Service: MainService', function () {

  // load the service's module
  beforeEach(module('gossApp'));

  // instantiate service
  var MainService;
  beforeEach(inject(function (_MainService_) {
    MainService = _MainService_;
  }));

  it('should do something', function () {
    expect(!!MainService).toBe(true);
  });

});
