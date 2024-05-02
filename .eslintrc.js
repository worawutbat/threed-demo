module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',  // Turns off unnecessary or conflicting ESLint rules
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        // Configure the Prettier rules
        'prettier/prettier': ['error', {
            semi: true,
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 80,
            tabWidth: 2,
        }],
    },
    overrides: [
        {
            "files": ["src/**/*.ts"],
            "parserOptions": {
              "project": "./tsconfig.json"
            }
        }
    ]
};