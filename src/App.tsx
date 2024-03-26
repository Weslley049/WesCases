


import GlobalStyle from './styles/global'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import {Home} from './pages/Home'
import { Customizacao } from './pages/Customizacao';

import './styles/fonts.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
       <Home/>
     
    ),
  },
  {
    path: "/customizacao",
    element: (
      <Customizacao/>
    ),
  },
]);

function App() {

  return (
    <>
    	<GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
