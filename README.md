secure-random
==============

[![build status](https://secure.travis-ci.org/jprichardson/secure-random.png)](http://travis-ci.org/jprichardson/secure-random)

[![browser support](https://ci.testling.com/jprichardson/secure-random.png)](https://ci.testling.com/jprichardson/secure-random)

A simple JavaScript component to normalize the creation of cryptographically strong random values.


Why?
----

Context switching between the browser and Node.js and creating cryptographically secure random numbers is annoying. This normalizes the behavior. Used by [CryptoCoinJS](http://cryptocoinjs.com) and [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib).



Install
-------

### Node.js/Browserify

    npm install --save secure-random


### Component

    component install jprichardson/secure-random


### Bower

    bower install secure-random


### Script

```html
<script src="/path/to/secure-random.js"></script>
```


Usage
-----

### secureRandom(count, options)

- **countBytes**: is the number of bytes to return. 
- **options**: options to pass. Only valid value at this time `type`. `type` can be
either `Array`, `Uint8Array`, or `Buffer`. `Buffer` is only valid in Node.js or 
[Browserify](https://github.com/substack/node-browserify) environments - it will throw an error otherwise.



```js
var bytes = secureRandom(10) //return an Array of 10 bytes
console.log(bytes.length) //10
```



References
----------
* [Node.js crypto.randomBytes()](http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)
* [Node.js Buffer](http://nodejs.org/api/buffer.html)
* [window.crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues)
* [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)


License
-------

(MIT License)

Copyright 2013-2014, JP Richardson


