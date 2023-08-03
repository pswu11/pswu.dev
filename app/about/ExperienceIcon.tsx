import Image from "next/image"

type Props = {
  icon: string
  alt: string
}

function ExperienceIcon({icon, alt}: Props) {
  return (
    <div id="exp-icon" className="w-12 h-12 aspect-square flex justify-center items-center bg-base-darkpurple rounded-xl">
      <Image src={icon} alt={alt} className="h-3/5 aspect-square"/>
    </div>
  )
}
export default ExperienceIcon