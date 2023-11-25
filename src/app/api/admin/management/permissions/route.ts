import {json} from "stream/consumers";
import APIService from "@/api/utils/APIService";
import {cookies, headers} from "next/headers";
import {NextRequest} from "next/server";

export async function GET() {
    try {
        const res = await APIService.get("/admin/management/permissions", {
            headers: {
                Authorization: "Bearer " + cookies().get("access_token")?.value ?? null
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

export async function POST(request: Request) {
    try {
        const res = await APIService.post("/auth", {
            email: "superadmin@mail.com",
            password: "admin"
        }, {
            headers:{
                "User-Agent" : request.headers.get("user-agent")
            }
        })

        console.log(res.payload.data.token)
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


