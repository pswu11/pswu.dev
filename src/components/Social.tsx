type Props = {
  link: string
  source: string
  alt: string
}

function Social({link, source, alt}: Props) {
  return (
    <a href={link}>
      <img className="h-6" src={source} alt={alt} />
    </a>
  )
}

export default Social