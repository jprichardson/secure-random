!function(globals){
'use strict'

//*** UMD BEGIN
if (typeof define !== 'undefined' && define.amd) { //require.js / AMD
  define([], function() {
    return secureRandom
  })
} else if (typeof module !== 'undefined' && module.exports) { //CommonJS
  module.exports = secureRandom
} else { //script / browser
  globals.secureRandom = secureRandom
}
//*** UMD END

//options.array is the only valid option
function secureRandom(count, options) {
  options = options || {}
  //we check for process.pid to prevent browserify from tricking us
  if (typeof process != 'undefined' && typeof process.pid == 'number') {
    return nodeRandom(count, options)
  } else {
    if (!window.crypto) throw new Error("Your browser does not support window.crypto.")
    return browserRandom(count, options)
  }
}

function nodeRandom(count, options) {
  var crypto = require('crypto')
  var buf = crypto.randomBytes(count)

  if (options.array) 
    var ret = []
  else
    var ret = new Uint8Array(count)

  for (var i = 0; i < count; ++i) {
    ret[i] = buf.readUInt8(i)
  }

  return ret
}

function browserRandom(count, options) {
  var nativeArr = new Uint8Array(count)
  window.crypto.getRandomValues(nativeArr)

  if (options.array) {
    var ret = []
    for (var i = 0; i < nativeArr.length; ++i) {
      ret[i] = nativeArr[i]
    }
  } else {
    ret = nativeArr
  }

  return ret
}

}(this);
