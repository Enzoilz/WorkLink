import { useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { useEffect } from "react"


export function ProtectedRoute() {
    const navigate = useNavigate()
    const { auth } = useApp()

    useEffect(() => {
        return auth ? navigate("/dashboard/welcome") : navigate("/login")
    }, [auth])
}
