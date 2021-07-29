import { motion } from "framer-motion"
import { useState } from "react";
import "./animation.css"

const ProgressDiv = ({style, percent, title, image}) => {

    const [hover, setHover] = useState(false)

    return ( 
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="pt-6 max-w-xl ">
            <motion.div layout className="w-full rounded-sm max-w-xl h-4 overflow-hidden bg-gray">
                <div data-aos="slide-right" className="load" style={style}>
                </div>
            </motion.div>

            <motion.div layout className="flex items-center max-w-sm justify-between text-xl pt-6 ">
                    <motion.p layout>
                    {percent}
                    </motion.p>
                    <motion.p layout>
                    {title}
                    </motion.p>
                    <motion.img layout className={`${hover ? "fadeIn" : "opacity-0"} animated faster`} src={image} alt="Icons" />
            </motion.div>
        </div>                    
     );
}
 
export default ProgressDiv;