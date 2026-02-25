import { animate, motion } from "motion/react"

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
}

export function AnimatePage({ children }) {

    return(
        <motion.div 
            variants={animations} 
            initial="initial"
            animate="animate" 
            exit="exit"
        >
            { children }
        </motion.div>
    )
}