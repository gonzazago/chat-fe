import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

export async function GET(
    req: NextApiRequest,
    {params}:any
) {
    console.log(params)
    const response = {
        success: 'Logged from slug'
    };
    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
            "message": "Blurblur~"
        },
    });
}
