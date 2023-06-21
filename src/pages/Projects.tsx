import { useLoaderData } from "react-router-dom"
import { Project } from "../components/projects/Project"

type Proj = {
  title: string;
  desc: string;
  link: string;
  img: string;
  tech: string[];
}

export function Projects() {
  const allProjects = useLoaderData() as Proj[]
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
