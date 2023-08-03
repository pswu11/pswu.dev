import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

export default function Page({ params }: { params: { slug: string } }) {
  const fileName = fs.readdirSync("posts", "utf-8").filter(fn => fn.startsWith(`${params.slug}.md`))[0]
  const markdown = fs.readFileSync(`posts/${fileName}`, "utf-8")
  const { data: frontMatter, content } = matter(markdown)
  return (
    <article className="prose lg:prose-xl prose-invert prose-h2:text-2xl prose-h2:font-bold">
      <h2>{frontMatter.title}</h2>
      <MDXRemote source={content} />
    </article>
  )
}
