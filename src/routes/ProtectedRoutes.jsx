import { useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { Aside } from "../components/Aside/Aside"
import { Sheet } from "../pages/Sheet"


export function ProtectedRoute() {
    const navigate = useNavigate()
    const { auth } = useApp()

    return auth ? (
        <>
            <Aside />
            <Sheet />
        </>
    ) : navigate("/login")
}
