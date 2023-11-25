export type ResponseBody<PayloadType> = {
    code: "SUCCESS",
    timestamp: string,
    message: string,
    payload: PayloadType
}