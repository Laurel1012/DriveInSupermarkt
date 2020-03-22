import React from "react";
import registerMerchant from "../utils/registerMerchant.js";

class RegisterButtonComponent extends React.Component{
    render(){
        return (
            <div>
                <p>This is the Button Component for merchants to register</p>
                <button onClick={()=> document.getElementById("register").innerText = "You are now registrated"
                }>Registriere dich hier:</button>
                <p id="register" />
            </div>

        )
    }
}
export default RegisterButtonComponent;