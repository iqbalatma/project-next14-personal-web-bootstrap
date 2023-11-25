export type User = {
    id : string,
    firstname: string,
    lastname: string,
    fullname:string,
    email: string,
    phone_number: string
}

export type Token = {
    access_token : string,
    refresh_token: string,
    type: string
}