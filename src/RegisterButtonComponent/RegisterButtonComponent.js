import React from "react";
import { Form }  from "react-bootstrap";

class RegisterButtonComponent extends React.Component{
    render(){
        return (
            <p>
                <p>{this.props.textButton}</p>
                <button onClick={()=> document.getElementById("register").innerText = this.props.textRegistered
                }>Registriere dich hier:</button>
                <p id="register"></p>
            </p>
        )
    }
}


export default RegisterButtonComponent;