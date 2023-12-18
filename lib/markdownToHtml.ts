import m2h from "zenn-markdown-html";
//import { remark } from 'remark'
//import html from 'remark-html'


export default async function markdownToHtml(markdown: string) {
  //const result = await remark().use(html).process(markdown)
  //return result.toString()
  const options = {
    embedOrigin: "https://embed.zenn.studio",
  };
  return m2h(markdown, options)
}

