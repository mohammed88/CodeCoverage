var expect = require('chai').expect;
var path = require('path');
var sqrt = require('../sqrt').sqrt;
var nothing = require('../sqrt').nothing;

/*[[CANDIDATE SOLUTION]]*/
  describe('Square root function', function() {
    it('should find square root of positive interger', function() {
      nothing();
      expect(sqrt(4)).to.equal(2);
    });

    it("should throw an exception if given a negative numbers", function() {
      expect(function(){ sqrt(-1); }).to.throw("sqrt can't work on negative number");
    });
  });
/*[[CANDIDATE SOLUTION]]*/
