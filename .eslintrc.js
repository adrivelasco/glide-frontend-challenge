module.exports = {
	extends: ['airbnb', 'prettier', 'prettier/react'],

	parserOptions: {
		ecmaVersion: 9,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},

	parser: 'babel-eslint',

	env: {
		browser: true,
		node: true,
		es6: true,
		mocha: true,
		jest: true
	},

	rules: {
		'react/jsx-filename-extension': 0,
		'react/prop-types': 2,
		'react/react-in-jsx-scope': 0,
		'react/destructuring-assignment': 0,
		'import/no-unresolved': 0,

		'no-console': 0,
		'operator-linebreak': 0,
		'no-continue': 0,
		'no-plusplus': 0,
		'prefer-rest-params': 0,
		'class-methods-use-this': 0,
		'consistent-return': 0,
		'prefer-template': 0,

		'no-bitwise': 0,

		curly: ['error', 'multi-or-nest'],

		'no-underscore-dangle': [
			'warn',
			{
				allowAfterThis: true,
				allowAfterSuper: true,
				allow: ['_call', '__rootpath', '_where']
			}
		],

		'no-tabs': 1,
		'no-new': 0,
		'func-names': 0,

		'space-before-function-paren': ['error', 'never'],

		'arrow-parens': ['error', 'as-needed'],
		'arrow-body-style': 0,

		indent: [
			'error',
			'space',
			{
				SwitchCase: 1
			}
		],

		'comma-dangle': ['error', 'never'],

		'padded-blocks': 0,

		'max-len': [
			'error',
			{
				code: 90,
				tabWidth: 1,
				comments: 200
			}
		],

		'spaced-comment': [
			'error',
			'always',
			{
				exceptions: ['*']
			}
		],

		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 2
			}
		],

		'no-param-reassign': 0,

		'no-prototype-builtins': 0,
		'no-trailing-spaces': 2,
		'keyword-spacing': [
			'error',
			{
				overrides: {
					if: {
						after: false
					},
					for: {
						after: false
					},
					while: {
						after: false
					},
					switch: {
						after: false
					},
					catch: {
						after: false
					}
				}
			}
		],

		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement'
		],
		'function-paren-newline': 0,
		'no-await-in-loop': 0,

		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					minProperties: 5,
					multiline: true,
					consistent: true
				},
				ObjectPattern: {
					minProperties: 5,
					multiline: true,
					consistent: true
				}
			}
		],
		'nonblock-statement-body-position': [
			'error',
			'below',
			{ overrides: { else: 'any' } }
		]
	}
};
