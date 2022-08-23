import React from 'react';
import {useParams, Link} from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    
    const colors = ['red', 'cyan','green','yellow']

    return(
        <> 
            {
        colors.map(colorname=> {
            return (
                <div id="main" style={{ height: "100vh", backgroundColor: `${colorname}`}}>
                    <Link to={`/bgcolor/${colorname}`}>Background Color Changer</Link>
                </div>
                )
            }  
    )
}
</>
    )
}
 {/* // <div id="main" style={{backgroundColor: "red" , height: "100vh"}}>Background Color Changer</div> */}