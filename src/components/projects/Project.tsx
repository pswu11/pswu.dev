export function Project() {
  return (
    <div className="w-full h-40 white-border-rounded overflow-hidden red-shadow-lg flex">
    <img
      className="h-full aspect-[3/2] object-cover"
      src="https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1808&q=80"
    />
    <div className="flex flex-col p-4">
      <h2 className="font-semibold text-lg">Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
        commodi aliquam ut inventore consequatur.
      </p>
    </div>
  </div>
  )
}