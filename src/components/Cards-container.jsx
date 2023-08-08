import React from "react";
import Card from "./Card";
import card1,{card2,card3} from "../cardsInfo";

function CardsContainer(){
    return(<><div id="cards-container">
        <Card id="card-1" class="card" h4={card1.h4} oh4={card1.overlayH4} p={card1.p}/>
        <Card id="card-2" class="card" h4={card2.h4} oh4={card2.overlayH4} p={card2.p} />
        <Card id="card-3" class="card" h4={card3.h4} oh4={card3.overlayH4} p={card3.p}/>
    </div>
        
    </>)
}
export default CardsContainer;