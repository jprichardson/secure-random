if (typeof module != 'undefined' && module.exports) {
  var secureRandom = require('../lib/secure-random')
  require('terst')
}

describe('+ secureRandom(count)', function() {
  describe('> when no options are passed', function() {
    it('should generate a native type array of bytes', function() {
      var bytes = secureRandom(10)
      EQ (bytes.length, 10)
      T (bytes instanceof Uint8Array)
    })
  })

  describe('> when options.array is set', function() {
    it('should generate a regular array', function() {
      var bytes = secureRandom(10, {array: true})
      EQ (bytes.length, 10)
      T (bytes instanceof Array)
    })
  })
})
