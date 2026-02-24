import { useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { Board } from "../pages/Board"
import { Aside } from "../components/Aside/Aside"


export function ProtectedRoute() {
    const navigate = useNavigate()
    const { auth } = useApp()

    return auth ? (
        <>
            <Aside />
            <Board />
        </>
    ) : navigate("/login")
}
