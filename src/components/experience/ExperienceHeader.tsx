import ExperienceIcon from "./ExperienceIcon"

type Props = {
  role: string
  time: string
  icon: string
  alt: string
}

function ExperienceHeader({role, time, icon, alt}: Props) {
  return (
    <div id="exp-header" className="flex justify-between">
    <ExperienceIcon icon={icon} alt={alt}/>
    <div id="exp-header-text" className="flex flex-col items-end">
      <p>{role}</p>
      <p>{time}</p>
    </div>
  </div>
  )
}

export default ExperienceHeader