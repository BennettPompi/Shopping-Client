import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { AppContext } from './App';
import { CartProducts } from '../components/CartProducts';
import { CartProductProps } from '../components/CartProduct';
import { StatusBar } from '../components/StatusBar';
interface CartResponse{data: CartProductProps[]}
export const CartContext = createContext({instance: axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000
}), cartSize:0, setCartSize: (newSize: number)=>{}});
export function Cart() {
    const context = useContext(AppContext);
    const [cartData, setCartData] = useState<CartProductProps[]>([]);
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000
    });
    instance.post('/getCart', {username: context.user})
    .then((response:CartResponse) => {
       setCartData(response.data)
    });
    return (
        <div>
            <StatusBar />
            <AppContext.Provider value={context}>
            <CartProducts Products={cartData} />
            </AppContext.Provider>
        </div>
    );
}