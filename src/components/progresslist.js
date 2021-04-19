import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
const ProgressList = ({levels}) => {

    return (  
        <div className="mx-auto lg:mx-0 lg:max-w-none max-w-xl" >
            {levels.map((level) => (
            <div className="pt-6">
    
                <div className="w-full rounded-sm max-w-xl h-4 overflow-hidden bg-gray">
                    <div data-aos="slide-right" className="load" style={ level.style }>
                    </div>
                </div>
    
                <div className="flex gap-24 text-xl pt-6 ">
                        <p>
                        { level.percent }
                        </p>
                        <p>
                        { level.title }
                        </p>
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        ))}
        </div>
      );
}
 
export default ProgressList;