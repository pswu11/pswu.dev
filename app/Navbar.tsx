import NavItem from "./NavItem"

const navItems = [
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Blog",
    link: "/blog"
  },
  {
    title: "Projects",
    link: "/projects"
  }
]

function Navbar() {
  return (
    <nav className="flex gap-4">
      {
        navItems.map((item, idx) => (
          <NavItem key={idx} title={item.title} link={item.link}/>
        ))
      }
    </nav>
  )
}

export default Navbar