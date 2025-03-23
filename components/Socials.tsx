import Social from "./Social"

const socialItems = [
  {
    name: "GitHub",
    link: "https://github.com/pswu11",
    source: "github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pei-wu/",
    source: "linkedin.svg",
  },
]

function Socials() {
  return <section className="flex justify-center items-center gap-4 px-6 py-4 white-border-rounded purple-shadow-lg my-4">
    {
      socialItems.map((item) => (
        <Social key={item.name} link={item.link} source={item.source} alt={`${item.name} icon`}/>
      ))
    }
  </section>
}

export default Socials
