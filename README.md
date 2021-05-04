# Library of typed and tested javascript functions

## Math

#### `randNum`

_Generate a random number in the range [min, max] with an optional array of numbers to exclude_

#### `randBool`

_Generate a random boolean with success rate_

#### `roundTo`

_Round a number with custom precision_

#### `floorTo`

_Floor a number with custom precision_

#### `ceilTo`

_Ceil a number with custom precision_

#### `countDecimals`

_Count the amount of decimal places in a number_

#### `gcd`

_Calculate the Greatest Common Divisor (GCD) of two numbers_

#### `factorial`

_Calculate the factorial of a number_

#### `avg`

_Calculate the average of all passed numbers_

## Matrices

#### `matrixDot`

_Multiply matrices with error handling_

#### `matrixPlus`

_Sum matrices with error handling_

#### `matrixMinus`

_Substract matrices with error handling_

#### `matrixMultiply`

_Multiply corresponding items of matrices with error handling_

#### `matrixApply`

_Apply a function to each item of the matrix_

#### `getMatrix`

_Create a matrix with rows and columns and fill it_

#### `cloneMatrix`

_Deep clone a matrix and optionally fill it_

#### `transposeMatrix`

_Transpose a matrix_

## Primes

#### `getPrimes`

_Create an array of primes in the range [min, max]_

#### `randPrime`

_Generate a random prime in the range [min, max]_

## Mixed

#### `popSlash`

_Filter out trailing slash from URL_

#### `relativeUrl`

_Convert any URL to relative without trailing slash_

#### `regexpEscape`

_Escape a string for RegExp_

#### `replaceStr`

_Replace all keys of the search object with the corresponding values in a string_

#### `filterPhone`

_Filter out all symbols and whitespaces in a phone number, adding a country code if it is not present_

#### `camelize`

_Convert any string to camel case_

#### `sumTime`

_Sum all passed time strings. Strings must be in the same format: HH:MM or HH:MM:SS_

#### `shuffle`

_Randomly shuffle an array_

#### `getPermutations`

_Get an array of all permutations of items_

#### `getDOM`

_Convert HTML string to an array of DOM elements_

#### `getScrollbarWidth`

_Get the width of a vertical scrollbar_

#### `getScrollbarHeight`

_Get the height of a horizontal scrollbar_

#### `memoize`

_Memoize a function to return a cached result for the same arguments_

#### `debounce`

_Debounce a function to reduce requests frequency_

#### `onSwipe`

_Listen to touch events and execute callback when the user has swiped for at least specified threshold_
