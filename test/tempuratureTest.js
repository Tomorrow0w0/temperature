var expect = require('chai').expect
describe('溫度換算', function() {
    var M = require('../lib/溫度換算')
 

    describe('CtoF測試', function () {
        it('M.convert(寫一個函數將攝氏to華氏)', function () {
          expect(M.convert(50)).to.equal(122)
        })
      })

});