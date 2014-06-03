var secureRandom = require('../')

require('terst')

describe('secure-random', function() {
  
  describe('secureRandom(countBytes, options)', function() {
    describe('> when type is not set', function() {
      it('should return Array of bytes', function() {
        var data = secureRandom(10)
        T (data instanceof Array)
        EQ (data.length, 10)
      })
    })


    describe('> when type is set to Array', function() {
      it('should return an Array of random bytes', function() {
        var data = secureRandom(10, {type: 'Array'})
        T (data instanceof Array)
        EQ (data.length, 10)
      })
    })

    describe('> when type is set to Buffer', function() {
      it('should return an Buffer of random bytes', function() {
        var data = secureRandom(10, {type: 'Buffer'})
        T (Buffer.isBuffer(data))
        EQ (data.length, 10)
      })
    })

    describe('> when type is set to Uint8Array', function() {
      it('should return an Uint8Array of random bytes', function() {
        var data = secureRandom(10, {type: 'Uint8Array'})
        T (data instanceof Uint8Array)
        EQ (data.length, 10)
      })
    })

    describe('> when type is not supported', function() {
      it('should throw an error', function() {
        THROWS (function() {
          var data = secureRandom(10, {type: 'superArray'})
        })
      })
    })    
  })

  describe('randomArray(byteCount)', function() {
    it('should return an Array', function() {
      var data = secureRandom.randomArray(10)
      T (data instanceof Array)
      EQ (data.length, 10)
    })
  })

  describe('randomUint8Array(byteCount)', function() {
    it('should return an Uint8Array', function() {
      var data = secureRandom.randomUint8Array(10)
      T (data instanceof Uint8Array)
      EQ (data.length, 10)
    })
  })

  describe('randomBuffer(byteCount)', function() {
    it('should return a Buffer', function() {
      var data = secureRandom.randomBuffer(10)
      T (Buffer.isBuffer(data))
      EQ (data.length, 10)
    })
  })
})
