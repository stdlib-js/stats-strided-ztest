<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

<!-- lint disable max-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ztest

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a one-sample Z-test for a strided array.

<section class="intro">

A Z-test commonly refers to a one-sample location test which compares the mean of a set of measurements `X` to a given constant when the standard deviation is known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μ ≥ μ0` versus the alternative hypothesis `H1: μ < μ0`.
-   `H0: μ ≤ μ0` versus the alternative hypothesis `H1: μ > μ0`.
-   `H0: μ = μ0` versus the alternative hypothesis `H1: μ ≠ μ0`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import ztest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-ztest@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-strided-ztest/tags). For example,

```javascript
import ztest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-ztest@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-ztest@esm/index.mjs';
```

#### ztest( N, alternative, alpha, mu, sigma, x, strideX, out )

Computes a one-sample Z-test for a strided array.

```javascript
import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];

var results = new Results();
var out = ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **mu**: mean value under the null hypothesis.
-   **sigma**: known standard deviation.
-   **x**: input array.
-   **strideX**: stride length for `x`.
-   **out**: output [results object][@stdlib/stats/base/ztest/one-sample/results/float64].

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to perform a one-sample Z-test over every other element in `x`,

```javascript
import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';

var x = [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ];

var results = new Results();
var out = ztest( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x0 = new Float64Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = ztest( x1.length, 'two-sided', 0.05, 0.0, 1.0, x1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### ztest.ndarray( N, alternative, alpha, mu, sigma, x, strideX, offsetX, out )

Computes a one-sample Z-test for a strided array using alternative indexing semantics.

```javascript
import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];

var results = new Results();
var out = ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to perform a one-sample Z-test over every other element in `x` starting from the second element

```javascript
import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';

var x = [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ];

var results = new Results();
var out = ztest.ndarray( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable when `N >= 50`. For smaller sample sizes or when the standard deviation is unknown, prefer a t-test.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dztest`][@stdlib/stats/strided/dztest], [`sztest`][@stdlib/stats/strided/sztest], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-float64@esm/index.mjs';
import normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-normal@esm/index.mjs';
import ztest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-ztest@esm/index.mjs';

var x = normal( 1000, 0.0, 1.0, {
    'dtype': 'generic'
});

var results = new Results();
var out = ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
// returns {...}

console.log( out.toString() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-ztest.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-ztest

[test-image]: https://github.com/stdlib-js/stats-strided-ztest/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-strided-ztest/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-ztest/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-ztest?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-ztest.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-ztest/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-ztest/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-ztest/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-ztest/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-ztest/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-ztest/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-ztest/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-ztest/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-ztest/main/LICENSE

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats-base-ztest-alternatives/tree/esm

[@stdlib/stats/base/ztest/one-sample/results/float64]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-float64/tree/esm

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/esm

[@stdlib/stats/strided/dztest]: https://github.com/stdlib-js/stats-strided-dztest/tree/esm

[@stdlib/stats/strided/sztest]: https://github.com/stdlib-js/stats-strided-sztest/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
