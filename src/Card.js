import React, { Component } from "react";

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
            {/* <h1>RoboFriends!</h1> */}
            <img className="" src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
// default is only for exporting 1 element