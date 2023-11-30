import {RESPONSE_CODE} from "@/enums/RESPONSE_CODE";

export type ResponseBody<PayloadType> = {
    code: RESPONSE_CODE,
    timestamp: string,
    message: string,
    payload: PayloadType
}