import { useContext } from 'react';
import {AppContext} from '../pages/App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export function StatusBar(){
    const context = useContext(AppContext);
    const navigate = useNavigate();
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000,
    });
    return(
        <div className="App-header">
        <h1 className='user-message'>{context.user}</h1>
        <span className='cart-span'>
            {context.user === "admin" && <button className='cart-button' onClick={()=>{
                instance.post('/backup', {username: context.user}).then((response)=>{
                    if (response.status === 200){
                        console.log("data backed up");
                    }
                }
            )}}>Admin</button>}
            <button className='cart-button' onClick={()=>{
                context.setUserID("INVALID");
                navigate('/');
                
        }}>Log Out </button>
            <p>Cart</p>
            <img alt='Cart' className='cart-button' src = 'Cart-icon.png'></img>
        </span>
      </div>
    )
}