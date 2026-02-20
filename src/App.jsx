import { BrowserRouter, Route, Routes } from 'react-router'
// import { MainRoutes } from './routes/MainRoutes'
import { useMemo, useState } from 'react'
import './index.css'
import { Login } from './components/Login/Login';
import {SignUp} from './components/SignUp/SignUp';


export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => {
    return {
      user,
      setUser, // features
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
        {/* <Route element={<MainRoutes />}>

        </Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
