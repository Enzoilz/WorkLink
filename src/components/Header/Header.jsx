import { useApp } from "../../hooks/useApp.jsx";
import { Link } from "react-router";
import { motion, MotionConfig } from "motion/react"

export function Header() {
    const { isOpen, setIsOpen } = useApp()

    return(
        <div>
            <header className="grid grid-cols-1 min-h-11 md:min-h-14 bg-background dark:bg-background shadow-2xl shadow-ring">
                <div className="flex justify-between md:justify-around items-center">
                    <div className="">
                        <div className="flex justify-center items-center md:w-52 h-full pl-5">
                            <h3 className="text-foreground text-h3">WorkLink</h3>
                        </div>
                    </div>

                    <nav className="hidden md:flex md:justify-start md:items-center md:w-full">
                        <div className="md:w-44 md:h-full">
                            <Link className="text-body2 text-foreground">Page d'accueil</Link>
                        </div>
                    </nav>

                    <div className="hidden md:flex md:gap-2 md:pr-2">
                        <button className="w-24 h-7 bg-primary rounded-[8px] text-primary-foreground cursor-pointer">Login</button>
                        <button className="w-24 h-7 bg-primary rounded-[8px] text-primary-foreground cursor-pointer">Register</button>
                    </div>

                    <div className="md:hidden gap-5 mr-5 cursor-pointer">
                        <AnimatedBurgerButton />
                    </div>
                    
                </div>
            
            </header>
            <main className="h-screen">
                { isOpen && <motion.div className="h-full w-full bg-card flex flex-col justify-around items-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                    <nav className="flex justify-center items-center w-full h-10 ">
                        <div className="flex justify-center items-center w-44 h-full">
                            <Link className="text-h3 md:text-body2 text-foreground">Page d'accueil</Link>
                        </div>
                    </nav>

                    <div className="flex justify-center flex-col gap-2">
                        <button className="w-48 h-7 bg-primary rounded-[8px] text-primary-foreground cursor-pointer">Login</button>
                        <button className="w-48 h-7 bg-primary rounded-[8px] text-primary-foreground cursor-pointer">Register</button>
                    </div>
                </motion.div> }
            </main>
        </div>
    )
}

export function AnimatedBurgerButton() {
    const {isOpen, setIsOpen} = useApp();

    return(
        <MotionConfig
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
        >
        <motion.button 
        initial={false}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative h-16 w-16 top-0.5"
        animate={isOpen ? "open" : "closed"}
        >
            <motion.span 
            style={{
                left: "50%",
                top: "37%",
                x: "-50%",
                y: "-50%",
            }}
            className="absolute h-1 w-10 bg-foreground rounded" 
            variants={{
                open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["35%", "50%", "50%"],
                },
                closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "35%"],
                },
            }}
            />
            <motion.span
            style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
            }}
            className="absolute h-1 w-10 bg-foreground rounded" 
            variants={{
                open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                },
                closed: {
                    rotate: ["-45deg", "0deg", "0deg"],
                },
            }}
        />
        <motion.span 
            style={{
                left: "50%",
                top: "67%",
                x: "-50%",
                y: "-50%",
            }}
            className="absolute h-1 w-10 bg-foreground rounded" 
            variants={{
                open: {
                    opacity: "0",
                },
                closed: {
                    opacity: "100%",
                },
            }}
        />
        </motion.button>
    </MotionConfig>
    )
}