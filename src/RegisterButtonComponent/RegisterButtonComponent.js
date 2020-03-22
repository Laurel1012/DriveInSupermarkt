import React from "react";
import { Form }  from "react-bootstrap";

class RegisterButtonComponent extends React.Component{


    render(){
        return (
            <p>
                <p>This is the Button Component for merchants to register</p>
                <button onClick={()=> document.getElementById("register").innerText = "Du bist nun registriert"
                }>Registriere dich hier:</button>
                <p id="register"></p>
            </p>
        )
    }
}


export default RegisterButtonComponent;