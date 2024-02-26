import { UserDataInput } from "./UserdataInput";
import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const errMsg =  'Invalid Username/Password. \n Please Try Again';
    const [registerButton, setRegisterButton] = useState(false);
    const registerPrompt = () =>{ return(
    <div className="App-body">
        <p>Don't have an account?</p>
        <button className= 'button' onClick={()=> navigate('/register')}>Register</button>
    </div>
    )}
    return (<>
        <h1>Login</h1>
        <UserDataInput submitTarget={'/login'} resultTarget="/success" errorMsg={errMsg} errorHandle={()=>(setRegisterButton(true))}/>
        {registerButton && registerPrompt()}
        
    </>)
}

