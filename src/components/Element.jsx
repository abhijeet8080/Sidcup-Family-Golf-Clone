import React from "react";
function Element(props){
    return(<>
        <div class="elem">
                <h2>{props.h2}</h2>
                <img src={props.src} alt=""/>
            </div>
    </>)
}
export default Element;