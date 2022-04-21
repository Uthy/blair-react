import { motion } from "framer-motion";

const AnimateRoute = ({children}) => {
    const animation = {
        initial: {opacity: 0, y:30},
        animate: {opacity:1, y: 0},
        exit: {opacity:0, y:-50},
    }

    return (
        <motion.div 
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    )
}

export default AnimateRoute;