import { Project } from "../components/projects/Project"

const allProjects = [
  {
    title: "Snake!",
    desc: "A web-base snake game. Longer and longer and longer and longer.",
    link: "https://snake-game-zeta-coral.vercel.app/",
    img: "projects/snake.png",
    tech: [
      "Typescript",
      "HTML",
      "CSS",
    ]
  },
]

export function Projects() {
  return (
    <div className="flex flex-col text-white gap-4">
      {
        allProjects.map((proj) => {
          return (
            <Project key={proj.title} name={proj.title} img={proj.img} link={proj.link} desc={proj.desc} tech={proj.tech}/>
          )
        })
      }
    </div>
  )
}
