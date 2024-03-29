import Link from "next/link"
import { Tag } from "@/components/Tag"
import { FaGithubAlt } from "react-icons/fa"

type Props = {
  name: string
  desc: string
  img: string
  link: string
  code: string
  tech: string[]
}

export function Project({ name, desc, img, link, code, tech }: Props) {
  return (
    <div className="relative w-full sm:h-44 white-border-rounded overflow-hidden red-shadow-lg flex flex-wrap sm:flex-nowrap">
      <Link href={link} className="h-full aspect-[2/1] sm:aspect-[3/2]">
        <img className="h-full w-full object-cover object-top" src={img} />
      </Link>
      <div className="flex flex-col p-4 justify-between">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-2">{desc}</p>
        <div className="flex gap-2 flex-wrap mt-2 mr-[20px]">
          {tech.map((label, idx) => (
            <Tag
              variant="label"
              text={label}
              key={idx}
              className="bg-secondary-green text-base-darkpurple"
            />
          ))}
        </div>
      </div>
      <Link href={code}>
        <FaGithubAlt className="absolute bottom-2 right-2 rounded-full w-6 h-6" />
      </Link>
    </div>
  )
}
