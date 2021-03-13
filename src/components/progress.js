import { useState } from "react";
import ProgressList from "./progresslist.js"

const Progress = () => {
    const [levels] = useState ([
        { title: 'HTML + CSS', percent: '85%', style: { backgroundColor: "#A69DFF", width: '85%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'JavaScript', percent: '80%', style: { backgroundColor: "#FE5F55", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Vue Js', percent: '60%', style: { backgroundColor: "#B3D89C", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'React', percent: '70%', style: { backgroundColor: "#FFE156", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Adobe XD', percent: '70%', style: { backgroundColor: "#E63462", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Photoshop', percent: '80%', style: { backgroundColor: "#B9F18C", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
    ])
    return (
    <div id="Skills" className="mx-auto max-w-screen-lg text-white  pt-12">
       <ProgressList levels={levels} />
    </div>
      );
}
export default Progress;

