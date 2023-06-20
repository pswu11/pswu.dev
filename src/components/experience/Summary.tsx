import ProfilePic from "./ProfilePic"

function Summary() {
  return (
    <div id="sec-summary" className="flex white-border-rounded px-5 py-4 gap-4 bg-base-darkpurple purple-shadow-lg my-8">
      <ProfilePic />
      <div id="summary-text" className="flex flex-col gap-4">
        <p>
          Hi, I'm <span>Pei</span>. I'm a Financial Analyst
          turned into product manager at open source software startups,
          currently transitioning into software development.
        </p>
        <div className="justify-end self-end">📍 Germany</div>
      </div>
    </div>
  )
}

export default Summary
