var expect = require('chai').expect
describe('TChange', function() {
    var N = require('../lib/TChange')
 
    describe('CtoF測試', function () {
        it('N.CtoF(寫一個函數將攝氏to華氏)', function () {
          expect(N.CtoF(50)).to.equal(122)
        })
      })

      
        describe('FtoC測試', function () {
            it('N.FtoC(寫一個函數將華氏to攝氏)', function () {
              expect(N.FtoC(122)).to.equal(50)
            })
          })

});


