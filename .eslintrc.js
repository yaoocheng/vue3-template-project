module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    globals: {
        defineProps: true,
        defineEmits: true,
    },
    rules: {
        'linebreak-style': ['off', 'windows'],
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'vue/no-multiple-template-root': 'off',
        'max-len': 'off',
        'consistent-return': 'off',
        'vue/no-v-model-argument': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        indent: ['error', 4, { SwitchCase: 1 }], // 缩进
    },
};
