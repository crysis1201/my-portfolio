import { useState } from "react";
import ProgressList from "./progresslist.js"

const Progress = () => {
    const [levels] = useState ([
        { title: 'React', percent: '60%', style: { backgroundColor: "#4287f5", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Vue', percent: '60%', style: { backgroundColor: "#4287f5", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Html + Css', percent: '60%', style: { backgroundColor: "#4287f5", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
    ])
    return (
    <div id="Skills" className="mx-auto max-w-screen-lg text-white  pt-12">
       <ProgressList levels={levels} />
    </div>
      );
}
export default Progress;

