import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom"

AOS.init();
const ProjectList = ({Works}) => {

    return (  
    <div className="max-w-screen-lg mx-auto pt-12 text-3xl text-center">
      {Works.map((Work) => (
        <div key={Work.id}>
            <p className="text-white"><Link className="px-5 py-2" to={`/blogs/${Work.id}`}>{Work.title}</Link></p>
            <div className="pt-12 flex justify-between items-center">
                <div data-aos="flip-up" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom" className="mx-auto">
                <Link  to={`/blogs/${Work.id}`}>
                  <img className="max-w-220" src={'./Images/' + Work.url} alt=""></img>
                </Link>
                </div>
                <div data-aos="flip-up" data-aos-delay="400" data-aos-anchor-placement="bottom-bottom" className="mx-auto mobile:block hidden">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="max-w-220" src={'./Images/' + Work.url1} alt=""></img>
                </Link>
                </div>
                <div data-aos="flip-up" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom" className="mx-auto lg:block hidden">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="max-w-220" src={'./Images/' + Work.url2} alt=""></img>
                </Link>
                </div>
               <div data-aos="flip-up" data-aos-delay="600" data-aos-anchor-placement="bottom-bottom" className="mx-auto hidden lg:block">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="max-w-220" src={'./Images/' + Work.url3} alt=""></img>
                </Link>
                </div> 
            </div>
            <p className="text-white text-lg pb-12 pt-12">{Work.descripition}  <Link to={`/blogs/${Work.id}`}> <span>{Work.website}</span> </Link>  </p>                 
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                  
        ))}
    </div>
      );
}
 
export default ProjectList;