import ExperienceDesc from "./ExperienceDesc"
import ExperienceHeader from "./ExperienceHeader"
import clsx from "clsx"

type Props = {
  type: string
  header?: string
  role: string
  time: string
  summary: string
  bullets: string[]
  icon: string
  alt: string
}

function Experience({ type, header, role, time, summary, bullets, icon, alt }: Props) {
  return (
    <div
      className={clsx(
        "white-border-rounded flex flex-col px-5 py-4 gap-2",
        `${type}` === "study"
          ? "yellow-shadow-lg"
          : `${type}` === "tech"
          ? "green-shadow-lg"
          : "purple-shadow-lg"
      )}
    >
      {
        icon ? <ExperienceHeader role={role} time={time} icon={icon} alt={alt} /> : <p className="font-semibold">{header}</p>
      }
      <ExperienceDesc summary={summary} bullets={bullets} />
      <button></button>
    </div>
  )
}

export default Experience
