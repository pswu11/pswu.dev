/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  turbopack: {},
}

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX(nextConfig)
