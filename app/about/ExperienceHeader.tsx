import ExperienceIcon from "./ExperienceIcon"

type Props = {
  role: string
  org: string
  time: string
  icon: string
  alt: string
}

function ExperienceHeader({ role, org, time, icon, alt }: Props) {
  return (
    <div id="exp-header" className="flex justify-between">
      <ExperienceIcon icon={icon} alt={alt} />
      <div id="exp-header-text" className="flex flex-col items-end">
        <div className="flex flex-wrap justify-end gap-x-1">
          <span className="text-ellipsis">{`${role}`}</span>
          <span>{`@ ${org}`}</span>
        </div>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default ExperienceHeader