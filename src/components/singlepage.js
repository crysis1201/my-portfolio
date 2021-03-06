const SinglePage = ({Works}) => {

  return (  
  <div className="max-w-screen-lg mx-auto pt-12 text-3xl bg-black text-white text-center">
    {Works.map((work) => (
      <div>
        <p className="text-3xl" >{work.title}</p>
        <p className="text-lg pt-10" >{work.descripitionLg}</p>
        <img className="profile mx-auto pt-10" src={work.image1} alt={work.alt}></img>   
        <p className="italic text-base" >{ work.alt }</p>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                         
      ))}
  </div>
    );
}

export default SinglePage;

