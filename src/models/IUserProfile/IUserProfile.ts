export interface IUserProfile {
    id: string,
    name: string,
    age: number | null,
    country: string | null,
    photo: any | null,
    description: string | null,
    status: string | null,
    followed?: boolean
}