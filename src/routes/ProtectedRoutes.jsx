import { Outlet, useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"


export function ProtectedRoute() {
    const { auth, error, setError } = useApp()
    const navigate = useNavigate()

    const handleConnect = () => {
        navigate("/login")
    }

    return auth ? (
        <>
            <Outlet />
        </>
    ) : (
        <div className="flex justify-center items-center flex-col w-full h-screen gap-5 ">
            <p>Une erreur c'est produite lors de la connection !</p>
            <button className="h-10 pl-5 pr-5 bg-primary text-center flex justify-center items-center rounded-[8px] text-primary-foreground shadow-2xl shadow-ring cursor-pointer" onClick={handleConnect}>Ce reconnecter</button>
        </div>
    )
}
