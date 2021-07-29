import { motion } from "framer-motion"

const animate = () => {
    return (
    <div> 
        <div className="absolute left-2/4 top-1/2" >
            <motion.div drag
            dragConstraints={{ left: 0, right: 300 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute bottom 2/3 left-3/4" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute bottom-full left-1/4" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute bottom-1/4 left-1/3" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute top-1/3 left-2/3" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute top-2/3 left-32" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute mobile:block hidden top-2/4 left-96" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute top-3/4 left-2" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
            </div>
            <div className="absolute mobile:block hidden top-1/2 left-72" >
            <motion.div drag
            dragConstraints={{ left: 10, right: 10 }}
            dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div> 
    </div>
     );
}
 
export default animate;