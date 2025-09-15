"use clients"
import { motion, animate } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};


const reversedIndex = (index) =>{
    const totalStep = 6;//Number of steps
    return totalStep-index-1;
}

const Stairs = () => {
  return (
    <>
        {/* render 6 motions divs, each representing a step of a stairs. 
        Each div will have the same animation defined by the stairsAnimation object. 
        The delay for each div is calculated sinamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step */}
    {[...Array(6)].map((_,index)=>{
        return(
        <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reversedIndex(index)*0.1,
            }}
            className="h-full w-full bg-white relative"
        />)
    })}
    </>
  )
}

export default Stairs