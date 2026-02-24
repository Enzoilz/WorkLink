import { useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "./Login"
import { useEffect, useState } from "react"


export function ProtectedRoute() {
    const navigate = useNavigate()
    const { auth } = useApp()

    useEffect(() => {
        return auth ? navigate("/dashboard/welcome") : navigate("/login")
    }, [auth])
}
