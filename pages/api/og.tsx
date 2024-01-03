import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "experimental-edge",
};

const font = fetch(
    new URL("../../public/assets/IBMPlexSansJP-subset.ttf", import.meta.url)
).then((res) => res.arrayBuffer());


export default async function (req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const hasEmoji = searchParams.has("emoji");
    const hasDate = searchParams.has("date");
    const fontData = await font;

    const title = hasTitle
        ? searchParams.get("title")?.slice(0, 100)
        : "haru blog.";

    const emoji = hasEmoji
        ? searchParams.get("emoji")?.slice(0, 100)
        : "🥰";

    const date = hasEmoji
        ? searchParams.get("date")?.slice(0, 100)
        : "";

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundImage: "url(https://haru-blog-chi.vercel.app/assets/og-bg.png)",
                    backgroundColor: "#fff",
                    backgroundSize: "100% 100%",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    fontFamily: '"IBMPlexSansJP"',
                }}
            >
                <div
                    style={{
                        marginTop: "70px",
                        //width: "100%",
                        fontSize: 100,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        lineHeight: 1.3,
                        wordWrap: "break-word",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        //width: "100%",
                        fontSize: 60,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        padding: "0 120px",
                        lineHeight: 1.3,
                        fontFamily: '"IBMPlexSansJP"',
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        //width: "100%",
                        fontSize: 30,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        padding: "0 120px",
                        lineHeight: 1.3,
                    }}
                >
                    {date}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 600,
            emoji: 'twemoji',
            fonts: [
                {
                    name: "IBMPlexSansJP",
                    data: fontData,
                    style: "normal",
                },
            ],
        }
    );
}