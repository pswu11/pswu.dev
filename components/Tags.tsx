import { useState } from "react";
import { Tag } from "./Tag"
import { FaHandPointRight } from "react-icons/fa"

const allTags = [
  {
    name: "All Experiences",
    className: "bg-base-white",
    id: "all-label",
  },
  {
    name: "Work",
    className: "bg-primary-purple",
    id: "work-label",
  },
  {
    name: "Study",
    className: "bg-secondary-yellow",
    id: "study-label",
  },
  {
    name: "Tools & Tech",
    className: "bg-secondary-green",
    id: "tech-label",
  },
]

type Props = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined,
}

function Tags({ onClick }: Props) {

  const [activeTag, setActiveTag] = useState<string | null>("all-label"); // Track active tag ID

  const handleTagClick = (id: string, event: React.MouseEvent<HTMLDivElement>) => {
    setActiveTag(id); // Set the clicked tag as active
    if (onClick) onClick(event); // Call parent onClick if provided
  };

  return (
    <div className="flex gap-2 my-4 flex-wrap justify-center items-center">
      {/* <FaHandPointRight size={24} /> */}

      {allTags.map((tag) => (
        <Tag
          key={tag.id}
          id={tag.id}
          className={tag.className}
          text={tag.name}
          onClick={(event) => handleTagClick(tag.id, event)}
          isActive={activeTag === tag.id}
        />
      ))}
    </div>
  )
}
export default Tags
