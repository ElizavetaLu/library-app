import React from "react";
import "./Button.scss"

const Button = ({content, action}) => {

    return <button className="button" onClick={action?()=>action:null}>{content}</button>

}

export default Button