# arr-difference [![npm version](https://badge.fury.io/js/arr-difference.svg)](https://badge.fury.io/js/arr-difference)

> Returns an array with the values from the first array(not need to be unique values), by excluding all values from additional arrays using strict equality for comparisons.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save arr-difference
```

## Usage

Returns the difference between the first array and additional arrays.

```js
var diff = require('arr-difference');

var array = ['a', 'b', 'c', 'd', 'a'];
var subArray = ['b', 'c', 'a'];

console.log(diff(array, subArray))
//=> ['a', 'd']

diff([1,2,3,1], [1,2]) => [1,3]

diff([1,2,3,1], [1,2,1,1]) => [3]

diff([1,2,3,1], [1,2], [3]) => [1]

diff([1,2,3,1], [1], [2], [3]) => [1]

// when params is not an Array
diff({}, {}) should equal []
```

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 2 | [chankwen](https://github.com/kwen8) |

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**chankwen**

* [github/kwen8](https://github.com/kwen8)

### License

Copyright © 2017, [chankwen](https://github.com/kwen8).
Released under the [MIT License](LICENSE).