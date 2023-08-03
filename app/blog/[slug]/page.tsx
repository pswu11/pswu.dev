import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

export default function Page({ params }: { params: { slug: string } }) {
  const fileName = `${params.slug}.md` ?? `${params.slug}.md`
  const markdown = fs.readFileSync(`posts/${fileName}`, "utf-8")
  const { data: frontMatter, content } = matter(markdown)
  return (
    <div>
      <h2 className="text-xl leading-8 font-semibold">{frontMatter.title}</h2>
      <MDXRemote source={content} />
    </div>
  )
}
