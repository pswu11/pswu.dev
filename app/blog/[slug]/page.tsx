import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
// import { remark } from 'remark';
// import html from 'remark-html';

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = `${path.join(process.cwd(), "posts")}/${params.slug}.md`
  const markdown = fs.readFileSync(filePath, "utf-8")
  const { data: frontMatter, content } = matter(markdown)
  // Alternative: Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(content)
  // const contentHtml = processedContent.toString()
  return (
    <article className="prose prose-invert prose-h2:text-2xl prose-h2:font-bold">
      <h2>{frontMatter.title}</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
      <MDXRemote source={content} />
    </article>
  )
}
