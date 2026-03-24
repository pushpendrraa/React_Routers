import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './components/dashboard';
import Createbill from './components/createbill';
import Editmenue from './components/editmenue';
import Settings from './components/Settings';
import Navbar from './components/Navbar';

const router=createBrowserRouter(

  [

    {
      path:"/",
      element:<div>
        <Navbar/>
        <Dashboard/>
      </div>
    },
    {
      path:"/Createbill",
      element:<div>
        <Navbar/>
        <Createbill/>
      </div>
    },
    {
      path:"/Editmenue",
      element:<div>
        <Navbar/>
        <Editmenue/>
      </div>
    },
    {
      path:"/Settings",
      element:<div>
        <Navbar/>
        <Settings/>
      </div>
    }
  ]

);
  

function App() {
  

  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
