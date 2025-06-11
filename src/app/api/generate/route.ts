import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { DEFAULT_MODEL, sunoApi } from '@/lib/SunoApi';
import { corsHeaders } from '@/lib/utils';

export const dynamic = 'force-dynamic';

// The POST handler for this route is commented out to disable the endpoint while
// keeping the file for reference. If needed in the future, simply uncomment the
// following block.
/*
export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { prompt, make_instrumental, model, wait_audio } = body;

      const audioInfo = await (await sunoApi((await cookies()).toString())).generate(
        prompt,
        Boolean(make_instrumental),
        model || DEFAULT_MODEL,
        Boolean(wait_audio)
      );

      return new NextResponse(JSON.stringify(audioInfo), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    } catch (error: any) {
      console.error('Error generating custom audio:', JSON.stringify(error.response.data));
      if (error.response.status === 402) {
        return new NextResponse(JSON.stringify({ error: error.response.data.detail }), {
          status: 402,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        });
      }
      return new NextResponse(
        JSON.stringify({ error: 'Internal server error: ' + JSON.stringify(error.response.data.detail) }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }
  } else {
    return new NextResponse('Method Not Allowed', {
      headers: {
        Allow: 'POST',
        ...corsHeaders
      },
      status: 405
    });
  }
}
*/

// OPTIONS handler is commented out along with POST to fully disable this API.
/*
export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}
*/
