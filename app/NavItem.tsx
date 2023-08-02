import Link from "next/link"

type Props = {
  link: string
  title: string
}

function NavItem({link, title}: Props) {
  return <Link className='white-border-btn purple-shadow hover:purple-shadow-lg' href={link}>{title}</Link>
}

export default NavItem