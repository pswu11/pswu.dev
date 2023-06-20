import { Tag } from "./Tag"

const allTags = [
  {
    name: "All Experiences",
    className: "bg-base-white",
    id: "all-label"
  },
  {
    name: "Work",
    className: "bg-primary-purple",
    id: "work-label"
  },
  {
    name: "Study",
    className: "bg-secondary-yellow",
    id: "study-label"
  },
  {
    name: "Tools & Tech",
    className: "bg-secondary-green",
    id: "tech-label"
  }
]

type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

function Tags({onClick}: Props) {
  return (
    <div className="flex gap-2 my-4 flex-wrap">

      {
        allTags.map((tag) => <Tag key={tag.id} id={tag.id} className={tag.className} text={tag.name} onClick={onClick}/>)
      }
    </div>
  )
}
export default Tags