import { useState } from "react";
import ProgressList from "./progresslist.js"

const Progress = () => {
    const [levels] = useState ([
        { title: 'HTML + CSS', percent: '85%', image: "https://img.icons8.com/color/36/000000/html-5--v1.png", style: { backgroundColor: "#A69DFF", width: '85%',  height: '100%', borderRadius: '20px 50px 50px 20px',} },
        { title: 'JavaScript', percent: '80%', image: "https://img.icons8.com/color/36/000000/javascript--v1.png", style: { backgroundColor: "#FE5F55", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Vue Js', percent: '60%', image: "https://img.icons8.com/color/36/000000/vue-js.png", style: { backgroundColor: "#B3D89C", width: '60%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'React', percent: '70%', image: "https://img.icons8.com/office/36/000000/react.png", style: { backgroundColor: "#FFE156", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Adobe XD', percent: '70%', image: "https://img.icons8.com/plasticine/36/000000/adobe-xd.png", style: { backgroundColor: "#E63462", width: '70%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
        { title: 'Photoshop', percent: '80%', image: "https://img.icons8.com/color/36/000000/adobe-photoshop--v1.png", style: { backgroundColor: "#B9F18C", width: '80%', height: '100%', borderRadius: '20px 50px 50px 20px'} },
    ])
    return (
    <div id="Skills" className="mx-auto max-w-screen-lg text-white pt-12">
       <ProgressList levels={levels} />
    </div>
      );
}
export default Progress;

