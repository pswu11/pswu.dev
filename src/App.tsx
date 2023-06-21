import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"
import { Projects } from "./pages/Projects"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/Root"

// async function expLoader() {
//   try {
//     const response = await fetch(
//       "http://209.38.197.154:8000/projects/e4e6a7de-c29c-41d5-b910-66ebe9e9d5af/experience"
//     )
//     if (!response.ok) {
//       throw Error(`Error with status: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (err) {
//     // Different error handling approaches for real-world use cases:
//     // 1. toastify to show a error notification
//     // 2. pass a parem and listen to it on the about page, and handle it there
//     // 3. redirect to an error page depending on the error
//     // But for personal website, this data is most likely hosted on the same server.
//     console.log(err)
//   }
// }

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
        // loader: expLoader,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
