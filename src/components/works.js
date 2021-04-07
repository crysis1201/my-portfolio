import { Link } from "react-router-dom"
import Homepage from "../Images/Homepage.jpg"

const ProjectList = ({Works}) => {

    return (  
    <div className="max-w-screen-lg mx-auto pt-12 text-3xl text-center">
      {Works.map((Work) => (
        <div key={Work.id}>
            <p className="text-white"><Link className="px-5 py-2" to={`/Works/${Work.id}`}>{Work.title}</Link></p>
            <div className="pt-12 flex justify-between items-center">
                <div className="max-w-sm mx-auto">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="profile" src={'./Images/' + Work.url} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="profile" src={'./Images/' + Work.url} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto lg:block hidden">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="profile" src={'./Images/' + Work.url} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto hidden lg:block">
                <Link to={`/blogs/${Work.id}`}>
                  <img className="profile" src={'./Images/' + Work.url} alt=""></img>
                </Link>
                </div>
            </div>
            <p className="text-white text-lg pt-12">{Work.descripition}  <Link to="/aa"> <span>{Work.website}</span> </Link>  </p>                 
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                  
        ))}
    </div>
      );
}
 
export default ProjectList;