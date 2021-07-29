import AOS from 'aos'
import 'aos/dist/aos.css'
import ProgressDiv from './ProgressDiv';
AOS.init();
const ProgressList = ({levels, key}) => {

    return (  
        <div  className="mx-auto lg:mx-0 lg:max-w-none max-w-xl" >
            {levels.map(({...level}) => (
                         <ProgressDiv {...level} key={level.title} />                                                                                                                                                                                                                                                                                                                                                                                                                       
            ))}
        </div>
      );
}
 
export default ProgressList;