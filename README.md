# is-valid-css-unit

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Returns true if the given value is a valid CSS unit.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-valid-css-unit
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add is-valid-css-unit
```

## Usage

```js
import isValidCSSUnit from 'is-valid-css-unit'

// Returns true
isValidCSSUnit('12px')
isValidCSSUnit('4.01%')
isValidCSSUnit('-456.8deg')
isValidCSSUnit('0.0ms')
isValidCSSUnit('+0.0rem')
isValidCSSUnit('-0.0dpi')
isValidCSSUnit('.60vmin')
isValidCSSUnit('10e3in')
isValidCSSUnit('-3.4e-2em')

// Returns false
isValidCSSUnit('12.px')
isValidCSSUnit('+-12.2%')
isValidCSSUnit('12.1.1deg')
isValidCSSUnit('-ms')
isValidCSSUnit('.rem')
isValidCSSUnit('%dpi')
isValidCSSUnit('avmin')
isValidCSSUnit('1ain')
isValidCSSUnit('a1em')
```

If you want to test for specific CSS units, you can import specific methods:

```js
import {
  isFontUnit,
  isTimeUnit,
  isAnglegeUnit,
  isViewportUnit,
  isAbsoluteUnit,
  isFrequencyUnit,
  isPercentageUnit,
  isResolutionUnit,
} from 'is-valid-css-unit'

// Returns true
isFontUnit('12em')
isTimeUnit('300ms')
isAnglegeUnit('-360.5deg')
isViewportUnit('50vw')
isAbsoluteUnit('125px')
isFrequencyUnit('5Hz')
isPercentageUnit('100%')
isResolutionUnit('+35dpi')

// Returns false
isFontUnit('12px')
isTimeUnit('300%')
isAnglegeUnit('-360.5vh')
isViewportUnit('50dpi')
isAbsoluteUnit('125rem')
isFrequencyUnit('5s')
isPercentageUnit('100rad')
isResolutionUnit('+35kHz')
```

- `isFontUnit`: Checks for valid CSS font units (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`).
- `isTimeUnit`: Checks for valid CSS time units (`s`, `ms`).
- `isAngleUnit`: Checks for valid CSS angle units (`deg`, `grad`, `rad`, `turn`).
- `isViewportUnit`: Checks for valid CSS viewport units (`vh`, `vw`, `vi`, `vb`, `vmin`, `vmax`).
- `isAbsoluteUnit`: Checks for valid CSS absolute units (`px`, `cm`, `mm`, `Q`, `in`, `pc`, `pt`, `mozmm`).
- `isFrequencyUnit`: Checks for valid CSS frequency units (`Hz`, `kHz`).
- `isPercentageUnit`: Checks for valid CSS percentage units (`%`).
- `isResolutionUnit`: Checks for valid CSS resolution units (`dpi`, `dpcm`, `dppx`, `x`).

## Playground

You can play around with different values here: [http://refiddle.com/refiddles/5b92e39c75622d4ca9270000](http://refiddle.com/refiddles/5b92e39c75622d4ca9270000)

[build-badge]: https://img.shields.io/travis/elving/is-valid-css-unit/master.png?style=flat-square
[build]: https://travis-ci.org/elving/is-valid-css-unit
[npm-badge]: https://img.shields.io/npm/v/is-valid-css-unit.png?style=flat-square
[npm]: https://www.npmjs.com/package/is-valid-css-unit
[coveralls-badge]: https://img.shields.io/coveralls/elving/is-valid-css-unit/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/elving/is-valid-css-unit
