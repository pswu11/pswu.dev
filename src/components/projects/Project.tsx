import { Link } from "react-router-dom"

type Props = {
  name: string
  desc: string
  img: string
  link: string
  tech: string[]
}

export function Project({ name, desc, img, link, tech }: Props) {
  return (
    <div className="w-full h-40 white-border-rounded overflow-hidden red-shadow-lg flex">
      <Link to={link}>
        <img className="h-full aspect-[3/2] object-cover" src={img} />
      </Link>
      <div className="flex flex-col p-4 justify-between">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p>{desc}</p>
        <div className="flex gap-2">
          {
            tech.map((label, idx) => <div key={idx} className="bg-secondary-green text-base-darkpurple px-1 py-1 text-sm">{label}</div>)
          }
        </div>
      </div>
    </div>
  )
}
