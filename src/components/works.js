import { Link } from "react-router-dom"

const ProjectList = ({Works}) => {

    return (  
    <div className="max-w-screen-lg mx-auto pt-12 text-3xl text-center">
      {Works.map((Work) => (
        <div>
            <p className="text-white"><Link className="px-5 py-2" to="/aa">{Work.title}</Link></p>
            <div className="pt-12 flex justify-between items-center">
                <div className="max-w-sm mx-auto">
                <Link to="/aa">
                  <img className="profile" src={Work.image1} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto">
                <Link to="/aa">
                  <img className="profile" src={Work.image1} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto lg:block hidden">
                <Link to="/aa">
                  <img className="profile" src={Work.image1} alt=""></img>
                </Link>
                </div>
                <div className="max-w-sm mx-auto hidden lg:block">
                <Link to="/aa">
                  <img className="profile" src={Work.image1} alt=""></img>
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