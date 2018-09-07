/**
 * Font Units
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/length#Font-relative_lengths
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const FONT_UNITS = ['cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh']

/**
 * Percentage Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/percentage#Syntax
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const PERCENTAGE_UNITS = ['%']

/**
 * Angle Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/angle#Units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const ANGLE_UNITS = ['deg', 'grad', 'rad', 'turn']

/**
 * Viewport Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/length#Viewport-percentage_lengths
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const VIEWPORT_UNITS = ['vh', 'vw', 'vi', 'vb', 'vmin', 'vmax']

/**
 * Absolute Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/length#Absolute_length_units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const ABSOLUTE_UNITS = ['px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'mozmm']

/**
 * Time Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/time#Units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const TIME_UNITS = ['s', 'ms']

/**
 * Frequency Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/frequency#Units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const FREQUENCY_UNITS = ['Hz', 'kHz']

/**
 * Resolution Units
 * https://developer.mozilla.org/en-US/docs/Web/CSS/resolution#Units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const RESOLUTION_UNITS = ['dpi', 'dpcm', 'dppx', 'x']

/**
 * All CSS Units
 * @constant
 * @type {Array.<string>}
 * @default
 * @public
 */
export const ALL_UNITS = [].concat(
  FONT_UNITS,
  TIME_UNITS,
  ANGLE_UNITS,
  VIEWPORT_UNITS,
  ABSOLUTE_UNITS,
  FREQUENCY_UNITS,
  PERCENTAGE_UNITS,
  RESOLUTION_UNITS,
)

/**
 * Creates and returns a regular expression that matches valid numbers and CSS units.
 * @param {Array} units - CSS units to match for.
 * @returns {RegExp}
 */
const generateRegExp = (units = []) =>
  new RegExp(
    `(^[\\+\\-]?\\.?[0-9]+[e\\-]?\\.?)?[0-9]+(e\\-[0-9])?(${units.join(
      '|',
    )})?$`,
    'i',
  )

/**
 * Regular expression that matches for any kind of CSS unit.
 * @type {RegExp}
 */
const allRegexp = generateRegExp(ALL_UNITS)

/**
 * Regular expression that matches CSS font units.
 * @type {RegExp}
 */
const fontRegexp = generateRegExp(FONT_UNITS)

/**
 * Regular expression that matches CSS time units.
 * @type {RegExp}
 */
const timeRegexp = generateRegExp(TIME_UNITS)

/**
 * Regular expression that matches CSS angle units.
 * @type {RegExp}
 */
const angleRegexp = generateRegExp(ANGLE_UNITS)

/**
 * Regular expression that matches CSS viewport units.
 * @type {RegExp}
 */
const viewportRegexp = generateRegExp(VIEWPORT_UNITS)

/**
 * Regular expression that matches CSS absolute units.
 * @type {RegExp}
 */
const absoluteRegexp = generateRegExp(ABSOLUTE_UNITS)

/**
 * Regular expression that matches  CSS frequency units.
 * @type {RegExp}
 */
const frequencyRegexp = generateRegExp(FREQUENCY_UNITS)

/**
 * Regular expression that matches  CSS percentage units.
 * @type {RegExp}
 */
const percentageRegexp = generateRegExp(PERCENTAGE_UNITS)

/**
 * Regular expression that matches CSS resolution units.
 * @type {RegExp}
 */
const resolutionRegexp = generateRegExp(RESOLUTION_UNITS)

/**
 * Tests a value to see if it's a valid CSS font unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isFontUnit = (value) => fontRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS time unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isTimeUnit = (value) => timeRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS angle unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isAnglegeUnit = (value) => angleRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS viewport unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isViewportUnit = (value) => viewportRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS absolute unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isAbsoluteUnit = (value) => absoluteRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS frequency unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isFrequencyUnit = (value) => frequencyRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS percentage unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isPercentageUnit = (value) => percentageRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS resolution unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export const isResolutionUnit = (value) => resolutionRegexp.test(value)

/**
 * Tests a value to see if it's a valid CSS unit
 * @param {String} value
 * @returns {Boolean}
 * @public
 */
export default (value) => allRegexp.test(value)
