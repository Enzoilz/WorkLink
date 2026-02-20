import { Link } from "react-router";


export function Header() {

    return(
        <header className="grid grid-cols-1 bg-red-600">
            <div className="flex flex-row">
                <div>
                    <h3>WorkLink</h3>
                </div>

                <div className="">
                    <Link>Page d'accueil</Link>
                </div>

                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </header>
    )
}