import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import fs from 'fs'

export const config = {
    runtime: "edge",
};

/*
const font = fetch(
    new URL("../../public/assets/IBMPlexSansJP-subset.woff", import.meta.url)
).then((res) => res.arrayBuffer());
*/

export default async function (req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const hasEmoji = searchParams.has("emoji");
    const hasDate = searchParams.has("date");
    /*const fontData = await font;*/

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
                    backgroundColor: "#FFAABB",
                    backgroundSize: "100% 100%",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    textAlign: "center",
                    //alignItems: "center",
                    //justifyContent: "center",
                    flexDirection: "column",
                    //flexWrap: "nowrap",
                }}
            >
                <div
                    style={{
                        marginTop: "0px",
                        marginLeft: "-20px",
                        //width: "200%",
                        fontSize: 100,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(30deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "420px",
                        marginLeft: "100px",
                        //width: "200%",
                        fontSize: 150,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(160deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "80px",
                        marginLeft: "250px",
                        //width: "200%",
                        fontSize: 80,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(290deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "40px",
                        marginLeft: "850px",
                        //width: "200%",
                        fontSize: 100,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(350deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "490px",
                        marginLeft: "700px",
                        //width: "200%",
                        fontSize: 110,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(30deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "420px",
                        marginLeft: "1000px",
                        //width: "200%",
                        fontSize: 110,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                        //padding: "0 120px",
                        //lineHeight: 1.3,
                        //wordWrap: "break-word",
                        transform: "rotate(340deg)",
                        position: "absolute",
                    }}
                >
                    {emoji}
                </div>
                <div
                    style={{
                        marginTop: "auto",
                        marginBottom: "0px",
                        marginLeft: "7px",
                        marginRight: "7px",
                        //width: "100%",
                        fontSize: 50,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        margin: "auto",
                        marginTop: "0px",
                        //width: "100%",
                        fontSize: 30,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "#000",
                    }}
                >
                    {date}

                </div>

            </div>
        ),
        {
            width: 1200,
            height: 630,
            emoji: 'twemoji',

        }
    );
}