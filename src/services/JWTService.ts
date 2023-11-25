export type ParsedToken = {
    exp: number
    firstname: string,
    lastname: string,
    fullname: string,
    email: string,
    phone_number: string,
}

class JWTService {
    public static getParsedJWT(jwtToken: string | undefined): ParsedToken | null {
        if (jwtToken === undefined) {
            return null
        }
        const base64Url = jwtToken.split('.')[1];
        const jwt = require('jsonwebtoken');

        return jwt.decode(jwtToken)
    }

    public static getUser(jwtToken: string) {
        const parsedToken = this.getParsedJWT(jwtToken);
        if (parsedToken) {
            return {
                "firstname": parsedToken.firstname ?? null,
                "lastname": parsedToken.lastname ?? null,
                "fullname": parsedToken.fullname ?? null,
                "email": parsedToken.email ?? null,
                "phone_number": parsedToken.phone_number ?? null,
            }
        }

        return null;
    }
}

export default JWTService