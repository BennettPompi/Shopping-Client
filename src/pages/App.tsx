import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, createContext } from 'react';
import { Products } from '../components/Products';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { StorePage } from './StorePage';
import { Login } from './Login';
import { Register } from './Register';

export const AppContext = createContext({user: "INVALID", setUserID: (id: string) => {}});

export function App() {
  const [userID, setUserID]: [string, any] = useState("INVALID");
  
  const myRouter = createBrowserRouter([
    {
        path: "/",
        element:
        <AppContext.Provider value={{user: userID, setUserID: setUserID}}>
          <Login/>
        </AppContext.Provider>
    },
    {
        path: "login",
        element: 
        <AppContext.Provider value={{user: userID, setUserID: setUserID}}>
        <Login/>
      </AppContext.Provider>
    },
    {
        path: "store",
        element: 
        <AppContext.Provider value={{user: userID, setUserID: setUserID}}>
          <StorePage/>
        </AppContext.Provider>
    },
    {
        path: "register",
        element: <Register/>
    }
]);
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  );
}

export default App;
