<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# doUntilEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Until a test condition is true, invoke a function for each element in a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-do-until-each
```

</section>

<section class="usage">

## Usage

```javascript
var doUntilEach = require( '@stdlib/utils-do-until-each' );
```

#### doUntilEach( collection, fcn, predicate\[, thisArg ] )

Invokes a `function` for each element in a `collection` until either a `predicate` function returns `true` or the function has iterated over all `collection` elements. Note that the condition is evaluated **after** executing `fcn`; thus, `fcn` **always** executes at least once.

```javascript
function predicate( value ) {
    return ( value !== value );
}

function log( value, index ) {
    console.log( '%s: %d', index, value );
}

var arr = [ 1, 2, 3, NaN, 4 ];

doUntilEach( arr, log, predicate );
/* =>
    0: 1
    1: 2
    2: 3
    3: NaN
*/
```

Both the `predicate` function and the `function` to apply are provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

If provided an empty `collection`, both `value` and `index` are `undefined`.

```javascript
function predicate( value ) {
    return ( value !== value );
}

function log( value, index ) {
    console.log( '%s: %s', index, value );
}

var arr = [];

doUntilEach( arr, log, predicate );
/* =>
    undefined: undefined
*/
```

Basic support for dynamic collections is provided. Note, however, that index incrementation is monotonically increasing.

```javascript
function predicate( value ) {
    return ( value !== value );
}

function log1( value, index, collection ) {
    console.log( '%s: %d', index, value );
    if ( index === collection.length-1 && collection.length < 10 ) {
        collection.push( index+2 );
    }
}

var arr = [ 1, 2, 3, 4 ];

doUntilEach( arr, log1, predicate );
/* =>
    0: 1
    1: 2
    2: 3
    3: 4
    4: 5
    5: 6
    6: 7
    7: 8
    8: 9
    9: 10
*/

function log2( value, index, collection ) {
    console.log( '%s: %d', index, value );
    collection.shift();
}

arr = [ 1, 2, 3, 4 ];

doUntilEach( arr, log2, predicate );
/* =>
    0: 1
    1: 3
*/
```

To set the function execution context for the applied function, provide a `thisArg`.

```javascript
function predicate( value ) {
    return ( value > 2 );
}

function sum( value ) {
    this.sum += value;
    this.count += 1;
}

var arr = [ 1, 2, 3, NaN, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

doUntilEach( arr, sum, predicate, context );

var mean = context.sum / context.count;
// returns 2.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function returns the input `collection`.

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays -->

    ```javascript
    function predicate( value ) {
        return ( value !== value );
    }

    function log( value, index ) {
        console.log( '%s: %s', index, value );
    }

    var arr = [ 1, , , 4 ];

    doUntilEach( arr, log, predicate );
    /* =>
        0: 1
        1: undefined
        2: undefined
        3: 4
    */
    ```

-   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert-is-even' ).isPrimitive;
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var doUntilEach = require( '@stdlib/utils-do-until-each' );

function predicate( value ) {
    return ( value !== value );
}

function log( value, index, collection ) {
    console.log( '%s: %d', index, value );
    if ( isEven( index ) ) {
        collection.shift();
    } else {
        collection.push( index+1 );
    }
}

var arr;
var j;
var i;

arr = new Array( 100 );
j = floor( randu()*arr.length );
for ( i = 0; i < arr.length; i++ ) {
    if ( i === j ) {
        arr[ i ] = NaN;
    } else {
        arr[ i ] = i;
    }
}

doUntilEach( arr, log, predicate );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-do-until-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-do-until-each

[test-image]: https://github.com/stdlib-js/utils-do-until-each/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-do-until-each/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-do-until-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-do-until-each?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-do-until-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-do-until-each/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-do-until-each/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
