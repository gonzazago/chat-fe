import { NextApiRequest, NextApiResponse } from "next";


import { getCandidates } from "@/actions/get-candidates";

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(res)
    const candidates = getCandidates();
    return new Response(JSON.stringify(candidates), {
        status: 200,
        headers: {
            "content-type": "application/json"
        },
    });
}