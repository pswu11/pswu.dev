import { Project } from "./Project"

type Proj = {
  title: string
  desc: string
  link: string
  code: string
  img: string
  tech: string[]
}

const allProjects: Proj[] = [
  {
    title: "Snake!",
    desc: "A web-base snake game. Longer and longer and longer and longer.",
    link: "https://snake-game-zeta-coral.vercel.app/",
    code: "https://github.com/pswu11",
    img: "projects/snake.png",
    tech: ["Typescript", "HTML", "CSS"],
  },
  {
    title: "Frog Routes",
    desc: "A mock JSON server that returns a list of routes for prototype.",
    link: "https://frog-routes.vercel.app/",
    code: "https://github.com/frog-routes",
    img: "https://github.com/pswu11/frog-routes-cli/raw/main/banner.png",
    tech: ["Typescript", "Express", "Prisma", "PostgreSQL"],
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col text-white gap-4">
      {allProjects.map((proj) => {
        return (
          <Project
            key={proj.title}
            name={proj.title}
            img={proj.img}
            link={proj.link}
            code={proj.code}
            desc={proj.desc}
            tech={proj.tech}
          />
        )
      })}
    </div>
  )
}
