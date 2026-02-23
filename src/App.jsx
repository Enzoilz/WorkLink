import { BrowserRouter, Route, Routes } from 'react-router'
import { MainRoutes } from './routes/MainRoutes'
import { createContext, useMemo, useState } from 'react'
import { Layout } from './layout/Layout';

export const AppContext = createContext(AppProvider);

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => {
    return {
      user,
      isOpen,
      setUser,
      setIsOpen,
      isLogged: !!user,
    };
  }, [user, isOpen])

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
          <Route index element={<Layout />}>
            
          </Route>
          {/* <Route path='/dashboard' element={<MainRoutes />}>

          </Route> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}
