import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import { candidates } from '../../../seed/seed';

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(res)
    return new Response(JSON.stringify(candidates), {
        status: 200,
        headers: {
            "message": "Blurblur~"
        },
    });
}
