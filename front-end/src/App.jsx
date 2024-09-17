import './App.css'
import About from './pages/about/about';
import Achievement from './pages/achivements/achievement';
import Contact from './pages/contact/contact';
import Home from './pages/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from './pages/project/project';
import Login from './pages/login/login';
import ConnectedHome from './pages/protected-pages/connected-home/connected_home';
import ConnectedProfil from './pages/protected-pages/connected-profil/connected_profil';
import ConnectedProject from './pages/protected-pages/connected-project/connected_project';
import ConnectedEmployee from './pages/protected-pages/connected-employee/connected_employee';
import ConnectedCustomers from './pages/protected-pages/connected-customers/connected_customers';

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
    }, 
    {
      path: "/project",
      element: <Project/>
    },
    {
      path: "/login",
      element: <Login/>
    },
      // connected pages
    {
      path: "/connectedHome",
      element: <ConnectedHome/>
    },
    {
      path: "/connectedProfil",
      element: <ConnectedProfil/>
    }, 
    {
      path: "/connectedProject",
      element: <ConnectedProject/>
    },
    {
      path: "/connectedEmployee",
      element: <ConnectedEmployee/>
    }, 
    {
      path: "/connectedCustomer",
      element: <ConnectedCustomers/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
