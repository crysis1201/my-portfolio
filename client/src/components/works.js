import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom"

AOS.init();
const ProjectList = ({Works}) => {
  
    return (  
    <div id="Works" className="max-w-screen-lg mx-auto pt-12 text-3xl text-center">
      {Works.map(({id, title, url, url1, url2, url3, descripition, website, websiteName}) => (
        <div key={id}>
            <p className="text-white"><Link className="px-5 py-2" to={`/blogs/${id}`}>{title}</Link></p>
            <div className="pt-12 flex justify-between items-center">
                <div  data-aos-delay="300" data-aos="fade-right" className="mx-auto">
                <Link  to={`/blogs/${id}`}>
                  <img className="max-w-220" src={'./Images/' + url} alt=""></img>
                </Link>
                </div>
                <div  data-aos-delay="400" data-aos="fade-right" className="mx-auto mobile:block hidden">
                <Link to={`/blogs/${id}`}>
                  <img className="max-w-220" src={'./Images/' + url1} alt=""></img>
                </Link>
                </div>
                <div  data-aos-delay="500" data-aos="fade-right" className="mx-auto lg:block hidden">
                <Link to={`/blogs/${id}`}>
                  <img className="max-w-220" src={'./Images/' + url2} alt=""></img>
                </Link>
                </div>
               <div data-aos-delay="600" data-aos="fade-right"  className={`${url3 ? "mx-auto hidden lg:block" : "hidden"}`}>
                <Link to={`/blogs/${id}`}>
                  <img className={"max-w-220"} src={'./Images/' + url3} alt=""></img>
                </Link>
                </div> 
            </div>
            <p className="text-white text-lg pb-12 pt-12">{descripition}  <a href={website}> <span>{websiteName}</span> </a>  </p>                 
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                  
        ))}
    </div>
  );
}
 
export default ProjectList;