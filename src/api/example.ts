import axios from './index';

interface apiType {}

/**
 *  example api
 */
// eslint-disable-next-line import/prefer-default-export
export function exampleApi(data: apiType) {
    return axios({
        method: 'post',
        url: '/example/data',
        data,
    });
}
