import { get, post } from './index';

interface type {}

/**
 *  example api
 */
export function exampleApi(data: Object) {
    return post<type>('/api/exp', data);
}

/**
 *  example api
 */
export function example1Api(data: Object) {
    return get<type>('/api/exp', data);
}

