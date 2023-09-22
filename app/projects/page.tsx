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
    title: "empleo",
    desc: "An app for job seekers to organize and track their job applications. A fork of team final project at Devhaus.",
    link: "https://github.com/pswu11/empleo",
    code: "https://github.com/pswu11/empleo",
    img: "projects/empleo.png",
    tech: ["Typescript", "Next.js", "Express", "Prisma", "PostgreSQL", "Clerk"],
    yearMonth: "2023-09",
  },
  {
    title: "frog routes",
    desc: "A work-in-progress personal project for mocking HTTP requests",
    link: "https://github.com/pswu11/frog-routes",
    code: "https://github.com/pswu11/frog-routes",
    img: "https://github.com/pswu11/frog-routes-cli/raw/main/banner.png",
    tech: ["Typescript", "Express", "Prisma", "Jest", "Fly.io"],
    yearMonth: "2023-08",
  },
  {
    title: "Snake!",
    desc: "A web-base snake game. Longer and longer and longer and longer.",
    link: "https://snake-game-zeta-coral.vercel.app/",
    code: "https://github.com/pswu11",
    img: "projects/snake.png",
    tech: ["Typescript", "HTML", "CSS"],
    yearMonth: "2023-05",
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
