import { useParams } from "react-router";
import Homepage from "../Images/Homepage.jpg"
import useFetch from "./useFetch";


const SinglePage = () => {
  const { id } = useParams()
  const { data:Works, error, isPending } =  useFetch('https://portfoliodataeazhil.herokuapp.com/blogs/'+id)
  
  return (  
  <div className="max-w-screen-lg m-auto h-screen pt-12 text-3xl bg-black text-white text-center">
      {isPending && <div>Loading</div>}
      { error && <div>{error}</div>}
      {Works && 
      <div className="my-auto" >
        <p className="text-3xl" ></p>
        <p className="text-lg pt-10" >{Works.descripitionLg}</p>
        <img className="profile mx-auto pt-10" src={Homepage} alt={Works.alt}></img>   
        <p className="italic text-base" >{Works.alt }</p>
      </div>}                                                                                                                                                                                                                                                                                                                                                                                              
  </div>
    );
}

export default SinglePage;

