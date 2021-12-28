module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['/build', '/tmp', '/node_modules', '/types', '/coverage'],
  rules: {
    // Possible Problems

    // Enforce `return` statements in callbacks of array methods
    // NOTE: checks even if the object which has the method is not an array.
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'warn',

    // Require `super()` calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Enforce "for" loop update clause moving the counter in the right direction.
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Enforce `return` statements in getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': 'error',

    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow `await` inside of loops
    // NOTE: in rare cases await is usable in loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'warn',

    // Disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow reassigning `const` variables
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'warn',

    // Disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in `function` definitions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': ['error', { includeExports: true }],

    // Disallow empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow reassigning exceptions in `catch` clauses
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow fallthrough of `case` statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow reassigning `function` declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // Disallow variable or `function` declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in `RegExp` constructors
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow calling some `Object.prototype` methods directly on objects
    // NOTE: suggests bad code quality solution, because of security vulnarability
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // Disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // Disallow `this`/`super` before calling `super()` in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': 'error',

    // Disallow control flow statements in `finally` blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // Disallow unused private class members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // Require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': [
      'warn',
      { enforceForSwitchCase: true, enforceForIndexOf: true },
    ],

    // Enforce comparing `typeof` expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'error',

    // Suggestions

    // Enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: 'error',

    // Enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'error',

    // Enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // Require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['error', 'self'],

    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line', 'consistent'],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // Enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',

    // Require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'error',

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['error', { considerPropertyDescriptor: true }],

    // Require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'as-needed'],

    // Enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'error',

    // Disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'warn',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

    // Disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',

    // Disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', { allow: ['!!'] }],

    // Disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'error',

    // Disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],

    // Disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow `\8` and `\9` escape sequences in string literals
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // Disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // Disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // 	Disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow multiple spaces in regular expressions
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': ['error', { allowInParentheses: false }],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow initializing variables to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],

    // Disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // Disallow unnecessary `catch` clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

    // Disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow unnecessary escape characters
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',

    // Disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'error',

    // Enforce variables to be declared either together or separately in functions
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'error',

    // Require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'error',

    // Require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error',

    // Require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'error',

    // Disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    // NOTE: supported only in ES2022
    // https://eslint.org/docs/rules/prefer-object-has-own
    'prefer-object-has-own': 'warn',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // Require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Require spread operators instead of `.apply()`
    // NOTE: will flag even if apply changes `this` context for the call
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'warn',

    // Require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Disallow async functions which have no `await` expression
    // NOTE: sometimes async can be used just to make a function promise-like
    // https://eslint.org/docs/rules/require-await
    'require-await': 'warn',

    // Enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'error',

    // Require generator functions to contain `yield`
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'error',

    // Enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',

    // Layout & Formatting

    // Enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'error',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
