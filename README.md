secure-random
==============

A simple JavaScript component to normalize the creation of cryptographically strong random values.


Why?
----

Context switching between the browser and Node.js and creating cryptographically secure random numbers is annoying. This normalizes the behavior. Used by [cryptocoinjs](https://github.com/cryptocoinjs)



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

**count**: is the number of elements to return. 
**options**: options to pass. Only valid value is `array`.

Returns a `Uint8Array` or `Array` if `options.array` is set.

```js
var bytes = secureRandom(10)
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

Copyright 2013, JP Richardson


