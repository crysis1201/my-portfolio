const progressDiv = ({style, percent}) => {
    return ( 
        <div className="pt-6">
            <div className="w-full rounded-sm max-w-xl h-4 overflow-hidden bg-gray">
                <div data-aos="slide-right" className="load" style={style}>
                </div>
            </div>

            <div className="flex gap-24 text-xl pt-6 ">
                    <p>
                    {percent}
                    </p>
                    <p>

                    </p>
            </div>
        </div>                    
     );
}
 
export default progressDiv;