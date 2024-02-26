import { useContext } from 'react';
import {AppContext} from './App';

export function StatusBar(){
    const context = useContext(AppContext);
    return(
        <div className="App-header">
        <h1 className='user-message'>{context.user}</h1>
        <span className='cart-span'>
          <p>Cart</p>
          <img alt='Cart' className='cart-button' src = 'Cart-icon.png'></img>
        </span>
      </div>
    )
}