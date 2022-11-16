import React from "react";

const Scroll = (props) => {
    console.log(props)
    return (
        <div style={{
            overflowY: 'scroll', borderTop: '5px solid dashed', height: '500px'
        }}>
            {props.children}

        </div >

    );
}
export default Scroll;