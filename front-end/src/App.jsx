import './App.css'
import About from './pages/about/about';
import Achievement from './pages/achivements/achievement';
import Contact from './pages/contact/contact';
import Home from './pages/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    }, {
      path: '/achievements',
      element: <Achievement/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
