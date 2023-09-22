import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'


export const GlobalContext = createContext()
export const GlobalContex2 = createContext()



const userId = "5067"

const userInfo = {
  name : "hasib",
  id: "5",
  age: 34
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalContext.Provider value={{user : "true"}}>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalContext.Provider> */}

    <GlobalContext.Provider value={userInfo}>
    <GlobalContex2.Provider value={userInfo}>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalContex2.Provider>
    </GlobalContext.Provider>


  </React.StrictMode>,
)
