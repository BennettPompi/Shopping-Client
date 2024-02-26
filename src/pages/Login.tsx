import { UserDataInput } from "../components/UserdataInput";
import './App.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import { AppContext } from "./App";
export const Login = () => {

    const navigate = useNavigate();
    const errMsg =  'Invalid Username/Password. \n Please Try Again';
    const [registerButton, setRegisterButton] = useState(false);
    const context = useContext(AppContext);
    useEffect(()=>{
        if (context.user !== "INVALID")
            navigate('../store');
    }, [context.user]);
    const submitHandler = (instance: Axios, username: string, password: string) =>{
        instance.post('/login',
    {
        username: username,
        password: password
    }).then((response)=>{
            if (response.status === 200){
                console.log("submission successful");
                context.setUserID(username);
                
            }
        }).catch((error)=>{
            console.log(error);
            setRegisterButton(true)
        })
    }

    const registerPrompt = () =>{ return(
    <div className="register-popup">
        <p>Don't have an account?</p>
        <button className= 'button' onClick={()=> navigate('/register')}>Register</button>
    </div>
    )}
    return (
    <div className="Login">
        <h1>Login</h1>
        <UserDataInput buttonText= "Login" errorMsg={errMsg} submitHandler={submitHandler}/>
        {registerButton && registerPrompt()}
        
    </div>
    )
}

