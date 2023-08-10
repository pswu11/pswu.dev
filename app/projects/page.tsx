import { Project } from "./Project"

type Proj = {
  title: string
  desc: string
  link: string
  code: string
  img: string
  tech: string[]
  yearMonth: string
}

const allProjects: Proj[] = [
  {
    title: "Snake!",
    desc: "A web-base snake game. Longer and longer and longer and longer.",
    link: "https://snake-game-zeta-coral.vercel.app/",
    code: "https://github.com/pswu11",
    img: "projects/snake.png",
    tech: ["Typescript", "HTML", "CSS"],
    yearMonth: "2023-05",
  },
  {
    title: "Frog Routes",
    desc: "A library with cli tooling for mocking HTTP requests",
    link: "https://frog-routes.vercel.app/",
    code: "https://github.com/pswu11/frog-routes",
    img: "https://github.com/pswu11/frog-routes-cli/raw/main/banner.png",
    tech: ["Typescript", "Express", "Prisma", "PostgreSQL"],
    yearMonth: "2023-08",
  },
  {
    title: "Movie App",
    desc: "A web-based movie app using OMDb API. A team project.",
    link: "https://frog-routes.vercel.app/",
    code: "https://github.com/frog-routes",
    img: "projects/snake.png",
    tech: ["React", "Typescript", "Express", "Prisma", "PostgreSQL"],
    yearMonth: "2023-07",
  },
  {
    title: "Tic Tac Toe",
    desc: "A command line interface tic tac toe game.",
    link: "https://frog-routes.vercel.app/",
    code: "https://github.com/pswu11/tictactoe",
    img: "https://github.com/pswu11/frog-routes-cli/raw/main/banner.png",
    tech: ["Golang"],
    yearMonth: "2021",
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
