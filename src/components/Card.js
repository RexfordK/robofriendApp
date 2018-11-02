import React from "react";
import "./Card.css"


const Card = ({name, email, id}) => {
 

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5 text-center">
          <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
    );
}

export default Card;
