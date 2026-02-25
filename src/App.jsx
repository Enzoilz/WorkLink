import { BrowserRouter, Route, Routes } from 'react-router'
import { ProtectedRoute } from './routes/ProtectedRoutes'
import { createContext, useMemo, useState } from 'react'
import { Layout } from './layout/Layout'
import { Login } from "./routes/Login"
import { SignUp } from "./routes/SignUp"
import { Home } from './pages/Home'

export const AppContext = createContext(AppProvider);

function AppProvider({ children }) {
  const [user, setUser] = useState([
        // { id: 1, firstname: "", lastname: "", password: ""}
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(
    localStorage.getItem("accessToken")
  )

  const [error, setError] = useState("")

  const value = useMemo(() => {
    return {
      isOpen,
      auth,
      error,
      setUser,
      setIsOpen,
      setAuth,
      setError,
    };
  }, [auth, user, isOpen, error])

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
          <Route path='/add' element={<AddJob/>} />
          <Route path='/sheet' element={<Sheet/>} />

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/dashboard' element={<ProtectedRoute />}>

          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}
