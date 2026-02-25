import { Outlet } from "react-router";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { useApp } from "../hooks/useApp.jsx";

export function Layout() {
    const { isOpen, setIsOpen } = useApp()

    return isOpen ? <Header /> : (
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}