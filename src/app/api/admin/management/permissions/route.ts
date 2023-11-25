import {json} from "stream/consumers";
import APIService from "@/api/utils/APIService";

export async function GET() {
    try {
        // const res: Response = await fetch('http://localhost/api/v1/admin/management/permissions', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Cache-Control': 'no-cache'
        //     },
        // })

        const res = await APIService.get("http://localhost/api/v1/admin/management/permissions", {
            headers: {
                Authorization: ""
            }
        })

        console.log(res)
        // if (!res.ok) {
        //     throw new Error(`HTTP error! Status: ${res.status}`);
        // }

        // const data = await res.json();
        return Response.json({});
    } catch (error: any) {
        console.log(error)
        // console.error(error);
        return Response.json({data: null, error: 'An error occurred while fetching data'});
    }
}