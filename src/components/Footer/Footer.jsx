import { Link } from "react-router"
import { motion } from "motion/react"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import linkedin from "../../assets/icons/linkedin.svg"

export function Footer() {

    return(
        <footer className="h-96 grid grid-cols-2 items-center p-6 pt-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-8">
                    <div className="w-28">
                        <h2 className="text-foreground text-[1.7rem] font-bold md:text-4xl">WorkLink</h2>
                    </div>
                    <div className="w-3xs md:w-2xs">
                        <p className=" text-foreground">
                            WorkLink connecte talent,
                            entreprise et opportunités
                            professionnelles en un seul
                            espace.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-28 h-5 md:w-36">
                    <div className="w-5 h-5">
                        <a href="https://www.facebook.com/" target="_blank"><motion.img src={facebook} alt="Facebook" whileHover={{ scale: 1.1, transition: 0.1 }} transition={{ duration: 0.5 }} /></a>
                    </div>
                    <div className="w-5 h-5">
                        <a href="https://www.instagram.com/" target="_blank"><motion.img src={instagram} alt="Instagram" whileHover={{ scale: 1.1, transition: 0.1 }} transition={{ duration: 0.5 }} /></a>
                    </div>
                    <div className="w-5 h-5">
                        <a href="https://www.linkedin.com/" target="_blank"><motion.img src={linkedin} alt="Linkedin" whileHover={{ scale: 1.1, transition: 0.1 }} transition={{ duration: 0.5 }} /></a>
                    </div>
                </div>
                
                <div>
                    <hr className="md:w-4xl" />
                </div>

                <div className="">
                    <p className="text-body2 text-foreground">© 2026 WorkLink. All rights reserved.</p>
                </div>
            </div>

                <div className="flex flex-col gap-6 pl-20 -mt-20">
                    <h2 className="text-h2 text-foreground">Navigation</h2>
                    <nav className="flex flex-col gap-2">
                        <Link to={"/"} className="text-subtitle text-primary">Accueil</Link>
                        <Link to={"/login"} className="text-subtitle text-primary">Login</Link>
                        <Link to={"/register"} className="text-subtitle text-primary">Register</Link>
                    </nav>
                </div>
        </footer>
    )
}