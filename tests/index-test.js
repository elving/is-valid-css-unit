import expect from 'expect'

import isValidCSSUnit, {
  ALL_UNITS,
  FONT_UNITS,
  TIME_UNITS,
  ANGLE_UNITS,
  VIEWPORT_UNITS,
  ABSOLUTE_UNITS,
  FREQUENCY_UNITS,
  PERCENTAGE_UNITS,
  RESOLUTION_UNITS,
  isFontUnit,
  isTimeUnit,
  isAnglegeUnit,
  isViewportUnit,
  isAbsoluteUnit,
  isFrequencyUnit,
  isPercentageUnit,
  isResolutionUnit,
} from 'src/index'

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/number#Valid_numbers
 */
const VALID_NUMBERS = [
  '5', // A raw <integer> is also a <number>
  '4.01', // Positive fraction
  '-456.8', // Negative fraction
  '0.0', // Zero
  '+0.0', // Zero, with a leading +
  '-0.0', // Zero, with a leading -
  '.60', // Fractional number without a leading zero
  '10e3', // Scientific notation
  '-3.4e-2', // Complicated scientific notation
]

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/number#Invalid_numbers
 */
const INVALID_NUMBERS = [
  '12.', // Decimal points must be followed by at least one digit.
  '+-12.2', // Only one leading +/- is allowed.
  '12.1.1', // Only one decimal point is allowed.
]

const INVALID_VALUES = ['-', '.', '%', 'a', '1a', 'a1', '-a', '+a']

const ALL_INVALID_VALUES = [].concat(INVALID_NUMBERS, INVALID_VALUES)

const UNIT_GROUPS = [
  {
    label: 'Font Units',
    units: FONT_UNITS,
  },
  {
    label: 'Time Units',
    units: TIME_UNITS,
  },
  {
    label: 'Angle Units',
    units: ANGLE_UNITS,
  },
  {
    label: 'Viewport Units',
    units: VIEWPORT_UNITS,
  },
  {
    label: 'Absolute Units',
    units: ABSOLUTE_UNITS,
  },
  {
    label: 'Frequency Units',
    units: FREQUENCY_UNITS,
  },
  {
    label: 'Percentage Units',
    units: PERCENTAGE_UNITS,
  },
  {
    label: 'Resolution Units',
    units: RESOLUTION_UNITS,
  },
  {
    label: 'Unitless',
    units: [''],
  },
]

const print = (collection) => collection.join(', ')

describe('is-valid-css-unit', () => {
  describe('isValidCSSUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      UNIT_GROUPS.forEach(({ label, units }) => {
        it(`${label}: ${print(units)}`, () => {
          units.forEach((unit) => {
            VALID_NUMBERS.forEach((number) => {
              expect(isValidCSSUnit(`${number}${unit}`)).toBe(true)
            })
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      UNIT_GROUPS.forEach(({ label, units }) => {
        it(`${label}: ${print(units)}`, () => {
          units.forEach((unit) => {
            ALL_INVALID_VALUES.forEach((number) => {
              expect(isValidCSSUnit(`${number}${unit}`)).toBe(false)
            })
          })
        })
      })
    })
  })

  describe('isFontUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(FONT_UNITS), () => {
        FONT_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isFontUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(FONT_UNITS), () => {
        FONT_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isFontUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isTimeUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(TIME_UNITS), () => {
        TIME_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isTimeUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(TIME_UNITS), () => {
        TIME_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isTimeUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isAnglegeUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(ANGLE_UNITS), () => {
        ANGLE_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isAnglegeUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(ANGLE_UNITS), () => {
        ANGLE_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isAnglegeUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isViewportUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(VIEWPORT_UNITS), () => {
        VIEWPORT_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isViewportUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(VIEWPORT_UNITS), () => {
        VIEWPORT_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isViewportUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isAbsoluteUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(ABSOLUTE_UNITS), () => {
        ABSOLUTE_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isAbsoluteUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(ABSOLUTE_UNITS), () => {
        ABSOLUTE_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isAbsoluteUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isFrequencyUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(FREQUENCY_UNITS), () => {
        FREQUENCY_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isFrequencyUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(FREQUENCY_UNITS), () => {
        FREQUENCY_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isFrequencyUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isPercentageUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(PERCENTAGE_UNITS), () => {
        PERCENTAGE_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isPercentageUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(PERCENTAGE_UNITS), () => {
        PERCENTAGE_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isPercentageUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })

  describe('isResolutionUnit', () => {
    describe(`Valid Numbers (returns true): ${print(VALID_NUMBERS)}`, () => {
      it(print(RESOLUTION_UNITS), () => {
        RESOLUTION_UNITS.forEach((unit) => {
          VALID_NUMBERS.forEach((number) => {
            expect(isResolutionUnit(`${number}${unit}`)).toBe(true)
          })
        })
      })
    })

    describe(`Invalid Numbers (returns false): ${print(
      ALL_INVALID_VALUES,
    )}`, () => {
      it(print(RESOLUTION_UNITS), () => {
        RESOLUTION_UNITS.forEach((unit) => {
          ALL_INVALID_VALUES.forEach((number) => {
            expect(isResolutionUnit(`${number}${unit}`)).toBe(false)
          })
        })
      })
    })
  })
})
