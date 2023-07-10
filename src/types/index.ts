
/* eslint-disable no-unused-vars */
interface ResponseData<T> {
    code: number;
    msg: string;
    data: T;
}

declare namespace ApiTypes {
    interface teamList {
        'team_id': string,
        'team_name': string,
        'team_description': string,
        'owner_user_id': string,
        'created_at': string,
        'updated_at': string,
        'team_avatar': string
    }
}
