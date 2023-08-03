import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import path from 'path';

export default function Page({ params }: { params: { slug: string } }) {
  const filePath = `${path.join(process.cwd(), 'posts')}/${params.slug}.md`
  const markdown = fs.readFileSync(filePath, "utf-8")
  const { data: frontMatter, content } = matter(markdown)
  return (
    <article className="prose prose-invert prose-h2:text-2xl prose-h2:font-bold">
      <h2>{frontMatter.title}</h2>
      <MDXRemote source={content} />
    </article>
  )
}
