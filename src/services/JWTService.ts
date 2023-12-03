export type ParsedToken = {
    iss: string,
    iat: number,
    exp: number
    nbf: number
    jti: string,
    sub: string,
    iua: string,
    type: string,
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
        const jwt = require('jsonwebtoken');
        return jwt.decode(jwtToken)
    }

    public static getUser(jwtToken: string) {
        const parsedToken = this.getParsedJWT(jwtToken);
        if (parsedToken) {
            return {
                "id": parsedToken.sub ?? null,
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