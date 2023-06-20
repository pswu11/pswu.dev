
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"
import { Projects } from "./pages/Projects"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
