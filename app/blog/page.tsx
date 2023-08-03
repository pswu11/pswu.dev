import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"

export default function Blog() {
  const postFiles = fs.readdirSync("posts")
  let blogPosts = []
  for (let post of postFiles) {
    const postMatter = matter(fs.readFileSync(`./posts/${post}`, "utf-8"))
    const postFrontmatter = postMatter.data
    blogPosts.push({ postFrontmatter, slug: post.replace(".md", "")})
  }


  return (
    <section className="text-lg flex flex-col gap-4 my-8">
      {blogPosts.sort((a, b) => b.postFrontmatter.date - a.postFrontmatter.date).map((post) => (
        <li key={post.slug} className="flex justify-between items-end">
          <Link href={`/blog/${post.slug}`} className="hover:underline">{post.postFrontmatter.title}</Link>
          <span className="text-base opacity-50">{new Date(post.postFrontmatter.date).toLocaleDateString("en-US")}</span>
        </li>
      ))}
    </section>
  )
}
