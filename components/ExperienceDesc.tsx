type Props = {
  summary: string
  bullets: string[]
}

function ExperienceDesc({ summary, bullets }: Props) {
  return (
    <div>
      <div>{summary}</div>
      <ul className="list-disc ml-4">
        {bullets.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceDesc
