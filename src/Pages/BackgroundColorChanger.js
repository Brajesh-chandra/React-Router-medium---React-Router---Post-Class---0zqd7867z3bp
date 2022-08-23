import React from 'react';
import {useParams, Link} from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    
    const colors = ['red', 'cyan','green','yellow']

    return(
        <div>
            {
        colors.map(color=> {
            return (
            <div id="main" style={{ height: "100vh", backgroundColor: `${color}`}}><Link to={`/bgcolor/${color}`}>Background Color Changer</Link></div>
                )
            }  
    )
}
</div>
    )
}
 {/* // <div id="main" style={{backgroundColor: "red" , height: "100vh"}}>Background Color Changer</div> */}