import Link from "next/link"
import { Tag } from "@/components/Tag"

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
        <p>{desc}</p>
        <div className="flex gap-2 flex-wrap mt-2 mr-[20px]">
          {tech.map((label, idx) => (
            <Tag
              text={label}
              key={idx}
              className="bg-secondary-green text-base-darkpurple py-[2px] px-2 text-sm"
            />
          ))}
        </div>
      </div>
      <Link href={code}>
        <img
          src="github.svg"
          className="absolute bottom-2 right-2 rounded-full w-6 h-6"
        ></img>
      </Link>
    </div>
  )
}
