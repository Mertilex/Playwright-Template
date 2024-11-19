// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
);

/*
ESlint configuration depends on project in which this Playwright Template will be used. 
Therefore, this file intentionally does not contain any ruleset 
and should be adjusted to individual needs.

For more information see here: https://typescript-eslint.io/getting-started/
*/