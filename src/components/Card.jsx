import React from "react";

function Card(props){
    return(<>
        <div id={props.id} className={props.class}>
            <div className="heading-text">
                        <h4>{props.h4}</h4>
            </div>
            <div className="overlay">
                    <h4>{props.oh4}</h4>
                    <p>{props.p}</p>
            </div>
        </div>
    </>)
}
export default Card;