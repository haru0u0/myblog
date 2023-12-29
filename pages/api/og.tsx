import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import Image from 'next/image'

export const config = {
    runtime: 'edge',
}

export default function handler(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)

        // ?title=<title>
        const hasTitle = searchParams.has('title')
        const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title'

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: 'black',
                        backgroundSize: '150px 150px',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: 'normal',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            marginTop: 30,
                            padding: '0 120px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            marginTop: 30,
                            display: 'flex',
                            // alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <img alt="" height={75} src="http://localhost:3000/logo.png" style={{ margin: '0 30px' }} width={320} />
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e: any) {
        console.log(`${e.message}`)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}