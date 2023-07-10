import { get, post } from './index';

/**
 *  example api
 */
export function getTeamListApi(data: Object) {
    return post<ResponseData<Array<ApiTypes.teamList>>>(`${isAddApi}/team/list`, data);
}


