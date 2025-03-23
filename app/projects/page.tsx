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
    title: "frog routes",
    desc: "A work-in-progress side project for mocking HTTP requests",
    link: "https://github.com/pswu11/frog-routes",
    code: "https://github.com/pswu11/frog-routes",
    img: "projects/frog-routes.png",
    tech: ["Typescript", "Express", "Prisma", "Jest", "Fly.io"],
    yearMonth: "2023-10",
  },
  {
    title: "pswu.dev (this site)",
    desc: "My personal website built with Next.js as an exercise.",
    link: "https://pswu.dev",
    code: "https://github.com/pswu11/pswu.dev",
    img: "projects/website.png",
    tech: ["Typescript", "Next.js", "TailwindCSS"],
    yearMonth: "2023-09",
  },
  {
    title: "empleo",
    desc: "Final team project at the bootcamp. An app for job seekers to organize and track their job applications. ",
    link: "https://github.com/pswu11/empleo",
    code: "https://github.com/pswu11/empleo",
    img: "projects/empleo.png",
    tech: ["Typescript", "Next.js", "Express", "Prisma", "PostgreSQL", "Clerk", "TailwindCSS"],
    yearMonth: "2023-09",
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
