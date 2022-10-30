import React from "react";
import "./Button.scss"

const Button = ({ content, action, funcParam }) => {

    return <button className="button shelf mark read" onClick={action ? () => action(funcParam) : null}>{content}</button>
}

export default Button