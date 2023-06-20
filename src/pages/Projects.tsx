import { Project } from "../components/projects/Project"

const allProjects = [
  {
    title: "Snake!",
    desc: "",
    tech: [
      "Typescript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Frog Routes",
    desc: "A hackathon projectl",
    tech: [
      "Typescript",
      "HTML",
      "CSS"
    ]
  },
]

export function Projects() {
  return (
    <div className="flex flex-col text-white gap-4">
      <Project />
    </div>
  )
}
