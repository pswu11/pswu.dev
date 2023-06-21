import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Experience from "../components/experience/Experience"
import Summary from "../components/experience/Summary"
import Tags from "../components/experience/Tags"

type Exp = {
  type: string;
  header?: string;
  icon: string;
  role: string;
  organization: string;
  time: string;
  summary: string;
  bullets: string[];
}

export function About() {
  const allExperiences = useLoaderData() as Exp[]
  const [experiences, setExperiences] = useState(allExperiences)
  return (
    <div>
      <Summary />
      <Tags
        onClick={(event) => {
          const el = event.target as HTMLElement
          const filteredType = el.id.split("-")[0]
          const filteredExp = allExperiences.filter((x) =>
            filteredType === "all" ? true : filteredType === x.type
          )
          setExperiences(filteredExp)
        }}
      />
      <div className="flex flex-col gap-4">
        {experiences.map((exp, idx) => (
          <Experience
            key={idx}
            type={exp.type}
            header={exp.header}
            role={exp.role}
            org={exp.organization}
            time={exp.time}
            icon={exp.icon}
            alt={exp.organization}
            summary={exp.summary}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </div>
  )
}
