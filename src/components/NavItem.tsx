import { Link } from "react-router-dom"

type Props = {
  link: string
  title: string
}

function NavItem({link, title}: Props) {
  return <Link className='white-border-btn purple-shadow hover:purple-shadow-lg' to={link}>{title}</Link>
}

export default NavItem