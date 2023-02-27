import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const mainStore = defineStore('main', {
    state: () => ({
        msg: 'hello',
    }),
    getters: {},
    actions: {},
});
