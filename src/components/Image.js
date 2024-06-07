import React from "react";
import ReactDOM from "react-dom"
import image from "../images/Image.jpg";

export default function Image() {
    return (
        <img src={image} alt="" className="profile-image" />
    )

}