import { BrowserRouter, data, Route, Routes } from 'react-router'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import { createContext, useEffect, useMemo, useState } from 'react'
import { Layout } from './layout/Layout'
import { Login } from "./routes/Login"
import { SignUp } from "./routes/SignUp"
import { Dashboard } from './pages/Dashboard'

export const AppContext = createContext(AppProvider);

function AppProvider({ children }) {
  const [user, setUser] = useState([
        // { id: 1, firstname: "", lastname: "", password: ""}
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(
    localStorage.getItem("accessToken")
  )

  const value = useMemo(() => {
    return {
      isOpen,
      auth,
      setUser,
      setIsOpen,
      setAuth,
    };
  }, [auth, user, isOpen])

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />

          <Route index element={<Layout />}>
            
          </Route>
          <Route path='/dashboard' element={<ProtectedRoute />}>
            <Route path='/dashboard/welcome' element={<Dashboard />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}
