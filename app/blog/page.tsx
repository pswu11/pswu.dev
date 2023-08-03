import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"

export default function Blog() {
  const postFiles = fs.readdirSync("posts")
  let blogPosts = []
  for (let post of postFiles) {
    const postMatter = matter(fs.readFileSync(`./posts/${post}`, "utf-8"))
    const postFrontmatter = postMatter.data
    blogPosts.push({ postFrontmatter, slug: post.split(".")[0]})
  }

  return (
    <section className="">
      Blog
      {blogPosts.map((post) => (
        <li>
          <Link href={`/blog/${post.slug}`}>{post.postFrontmatter.title}</Link>
        </li>
      ))}
    </section>
  )
}
