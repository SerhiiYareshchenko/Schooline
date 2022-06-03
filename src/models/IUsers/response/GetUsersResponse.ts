import {IUsers} from "../IUsers";

export interface GetUsersResponse extends IUsers{
    pages: number;
    total: number;
    limit: number;
    page: number;
    docs: IUsers[]
}