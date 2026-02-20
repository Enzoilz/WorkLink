import { BrowserRouter, Route, Routes } from 'react-router'
// import { MainRoutes } from './routes/MainRoutes'
import { useMemo, useState } from 'react'
import './index.css'
import { Login } from './routes/Login';
import {SignUp} from './routes/SignUp';
import { Layout } from './layout/Layout';

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => {
    return {
      user,
      setUser,
      theme,
      setTheme, 
      isLogged: !!user,
    };
  }, [user, theme])

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route element={<Layout />}>
          
        </Route>
        {/* <Route path='/dashboard' element={<MainRoutes />}>

        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}
