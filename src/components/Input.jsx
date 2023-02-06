import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";


function Input(props) {
    return <input type={props.type} placeholder={props.placeholder} />;

}

export default Input;