const helper = {
    getFirstString(data: string) {
        return data.charAt(0)
    },
    parseFetchException(exceptionError: { response: any }) {
        const response = exceptionError.response

        const errorCode = response.data.code.toString()
        const status = response.status.toString()
        const errorType: string = helper.getFirstString(status);
        return {
            response,
            errorCode,
            status,
            errorType
        }
    },
    getSecondsFromUnixTimeJWT(unixTime: number):number {
        return unixTime - this.getCurrentUnixEpochTime();
    },
    getCurrentUnixEpochTime(): number {
        const currentDate = new Date();

        return Math.floor(currentDate.getTime() / 1000);
    }
}

export default helper;