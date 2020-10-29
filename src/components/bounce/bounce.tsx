import React from 'react'
import {motion} from 'framer-motion';

const Bounce = () => {
    return(
        <motion.div animate={{y: 20}} transition={{type: "spring", duration: 3, repeat: Infinity, stiffness: 200}}>Bounce</motion.div>
    )
}

export default Bounce;