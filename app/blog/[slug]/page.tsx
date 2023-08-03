import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

export default function Page({ params }: { params: { slug: string } }) {
  const fileName = fs.readdirSync("posts").filter(fn => fn.startsWith(`${params.slug}.md`))[0]
  const markdown = fs.readFileSync(`posts/${fileName}`, "utf-8")
  const { data: frontMatter, content } = matter(markdown)
  return (
    <article className="prose prose-invert prose-h2:text-2xl prose-h2:font-bold">
      <p>file name {fileName}</p>
      <h2>{frontMatter.title}</h2>
      <MDXRemote source={content} />
    </article>
  )
}
