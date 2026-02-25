import icons from "../assets/icons/search.svg"
import arrow from "../assets/icons/arrowCTA.svg"
import { motion, MotionConfig } from "motion/react"
import { AnimatePage } from "../components/AnimatePage/AnimatePage"

export function Arrow() {

    return <img src={arrow} alt="Arrow right" />
}

export function Home() {

    return(
        <AnimatePage>
            <div className="w-full flex justify-center items-center flex-col mt-20 text-center gap-15">
                <motion.div className="relative w-fit" animate={{ opacity: [0, 1, 1, 1] }}>
                    <img
                        src={icons}
                        alt=""
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    />

                    <input
                        type="search"
                        placeholder="Search..."
                        className="border border-input rounded-[6px] text-ring bg-transparent pl-8 py-1 md:w-96"
                    />
                </motion.div>
                <motion.h1 className="text-card-foreground text-h1" animate={{ opacity: [0, 0.2, 0.5, 1] }}>
                    Connectez votre talent aux<br />
                    opportunités qui comptent.    
                </motion.h1>
                <motion.h3 className="text-subtitle text-muted-foreground" animate={{ opacity: [0, 0.2, 0.5, 1] }}>Stages, alternances et emplois réunis sur une seule plateforme intelligente.</motion.h3>
                <motion.p className="text-subtitle text-card-foreground" animate={{ opacity: [0, 0.2, 0.5, 1] }}>Trouvez plus vite le poste qui vous correspond grâce à une recherche optimisée, des offres<br />
                    ciblées et une expérience pensée pour les candidats comme pour les recruteurs. WorkLink<br />
                    simplifie la mise en relation entre compétences réelles et opportunités concrètes.
                </motion.p>
                <div>
                    <motion.button className="h-8 pl-14 pr-14 bg-primary text-body1 font-semibold text-primary-foreground rounded-[8px] flex items-center flex-row gap-2 shadow-2xl shadow-ring cursor-pointer" whileHover={{ scale: 1.1, transition: 0.1 }} transition={{ duration: 0.5 }}>Commencer <div className="pt-1"><Arrow /></div></motion.button>
                </div>
            </div>
        </AnimatePage>
    )
}