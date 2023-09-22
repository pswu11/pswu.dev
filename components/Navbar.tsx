import NavItem from "./NavItem"

const navItems = [
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Blog",
    link: "/blog"
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