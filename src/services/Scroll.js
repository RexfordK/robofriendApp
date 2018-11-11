import React from "react";


// props
// state
// children

const Scroll = (props) => {
    console.log("this makes me fixed at the top while I scroll");
    
    return (
        <div style={{overflowY: "scroll", border: "4px solid black", height: "75vh", margin: "10px 0 0 0"}}>
            {props.children}
        </div>
    )
}

export default Scroll;