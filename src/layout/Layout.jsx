import { Outlet } from "react-router";
import { Header } from "../components/Header/Header.jsx";

export function Layout() {

    return(
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
        </>
    )
}