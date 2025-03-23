"use client"

import { useState } from "react"
import Experience from "@/components/Experience"
import Tags from "@/components/Tags"
import Summary from "@/components/Summary"

type Exp = {
  type: string
  header?: string
  icon: string
  role: string
  organization: string
  time: string
  summary: string
  bullets: string[]
}

const allExperiences: Exp[] = [
  {
    type: "work",
    icon: "/experience/rs.png",
    role: "Product Manager",
    organization: "Raisin",
    time: "01.2024 - current",
    summary:
      "Raisin is a B2B2C platform for banks to offer deposit products to consumers",
    bullets: [
      "Owning communication protocols and reporting pipelines for deposit taking banks",
    ],
  },
  {
    type: "study",
    icon: "/experience/froggy.png",
    role: "Builder",
    organization: "Career Break",
    time: "2023",
    summary: "",
    bullets: [
      "Built full-stack web applications at a full-time coding bootcamp",
      "Other stuff in life",
    ],
  },
  {
    type: "work",
    icon: "/experience/qdb.svg",
    role: "Product Manager, Go-to-Market",
    organization: "QuestDB",
    time: "09.2021 - 01.2023",
    summary:
      "QuestDB (YC S20) is a high-performance open source database for time series and its use cases cover financial trading, IIoT, renewable energy, and fleet tracking.",
    bullets: [],
  },
  {
    type: "work",
    icon: "/experience/jina.svg",
    role: "Product Manager, Developer Relations",
    organization: "Jina AI",
    time: "09.2020 - 09.2021",
    summary:
      "Jina AI is an open source software company that provides MLOps platform for multimodal AI, neural search and generative AI.",
    bullets: [],
  },
  // {
  //   type: "study",
  //   icon: "/experience/eth.svg",
  //   role: "Devcon Scholar",
  //   organization: "Ethereum Foundation",
  //   time: "02.2019 - 10.2019",
  //   summary:
  //     "Selected as a Devcon V Scholar amongst 50 other candidates from around the world to participate in the Ethereum Foundation’s blockchain and cryptocurrency programming.",
  //   bullets: [],
  // },
  {
    type: "work",
    icon: "/experience/cloud_heat.svg",
    role: "Business Development",
    organization: "Cloud&Heat Technologies",
    time: "08.2018 - 08.2020",
    summary:
      "Cloud&Heat provides managed Kubernetes, managed OpenStack, and sustainable datacenter solutions.",
    bullets: [],
  },
  {
    type: "study",
    icon: "/experience/hhl.svg",
    role: "MSc in Management",
    organization: "HHL Leipzig Graduate School of Management",
    time: "09.2015 - 11.2017",
    summary: "",
    bullets: ["Innovation Management", "Economics & Regulation", "Marketing"],
  },
  {
    type: "work",
    icon: "/experience/solvemate.svg",
    role: "Product Management Intern",
    organization: "Solvemate",
    time: "01.2017 - 03.2017",
    summary:
      "Solvemate is a ML-powered chatbot that helps companies to automate customer support.",
    bullets: [],
  },
  {
    type: "study",
    icon: "/experience/snu.png",
    role: "Global MBA",
    organization: "Seoul National University",
    time: "09.2016 - 12.2016",
    summary: "Semester abroad",
    bullets: [],
  },
  {
    type: "work",
    icon: "/experience/yahoo.svg",
    role: "Senior Financial Analyst",
    organization: "Yahoo!",
    time: "11.2011 - 12.2014",
    summary:
      "My responsibilities covers forecasting & reporting, revenue & cost analysis, audience metrics, PR/PO management, reorganization project management, etc.",
    bullets: [],
  },
  {
    type: "study",
    icon: "/experience/ntpu.svg",
    role: "BBA",
    organization: "National Taipei University",
    time: "09.2006 - 06.2010",
    summary: "Finance and Cooperative Management",
    bullets: [],
  },
  {
    type: "tech",
    header: "Technologies",
    icon: "",
    role: "",
    organization: "",
    time: "",
    summary: "",
    bullets: [
      "JavaScript / TypeScript",
      "React",
      "Next.js",
      "SQL",
      "Git",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "HTML / CSS",
      "QuestDB",
    ],
  },
  {
    type: "tech",
    header: "Tools",
    icon: "",
    role: "",
    organization: "",
    time: "",
    summary: "",
    bullets: ["GitHub", "Looker", "Posthog", "Figma", "Productboard", "Jira"],
  },
]

function About() {
  const [experiences, setExperiences] = useState(allExperiences)
  return (
    <section>
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
    </section>
  )
}

export default About
