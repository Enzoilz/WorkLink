import { Link } from "react-router";

export function Header() {
    return(
        <header className="grid grid-cols-1 min-h-20 md:min-h-16 sm:min-h-16 bg-background dark:bg-background shadow-2xl shadow-color-ring">
            <div className="flex flex-row h-full items-center justify-between">
                <div className="flex flex-row">
                    <div className="flex justify-center min-w-64">
                        <h3>WorkLink</h3>
                    </div>

                    <div className="">
                        <Link>Page d'accueil</Link>
                    </div>
                </div>

                <div className="flex flex-row gap-5 pr-10">
                    <button className="w-20 h-6 
                    
                    ">Login</button>
                    <button >Register</button>
                </div>
            </div>
        </header>
    )
}