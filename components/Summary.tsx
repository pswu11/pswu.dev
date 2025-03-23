import ProfilePic from "./ProfilePic"

function Summary() {
  return (
    <div
      id="sec-summary"
      className="flex flex-wrap justify-center sm:flex-nowrap white-border-rounded px-5 py-4 gap-4 bg-base-darkpurple purple-shadow-lg sm:my-8 my-2"
    >
      <ProfilePic />
      <div id="summary-text" className="flex flex-col gap-4">
        <p>
          Hi, this is <span>Pei</span>. I am a financial analyst turned into
          product manager. I am fascinated by open source software and
          data analytics, which inspired me to learn programming.
        </p>
        <div className="justify-end self-end">📍 Germany</div>
      </div>
    </div>
  )
}

export default Summary
