import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from './App';
import { StatusBar } from '../components/StatusBar';
import { ProdResInterface } from '../components/Product';
import { Products } from '../components/Products';
interface CartResponse{data: ProdResInterface[]}
interface CartProductProps{
    id: number;
    title: string;
    imgLink: string;
    quantity: number,
    price: number
}
export function Cart() {
    const context = useContext(AppContext);
    const [cartData, setCartData]:Array<any> = useState(()=>{
        const instance = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 1000
        });
        instance.post('/getCart', {username: context.user})
        .then((response:CartResponse) => {
            return Object.values(response.data);
        })});

    const [cartSize, setCartSize]: [number, any] = useState(cartData.length);
    const CartContext:any = createContext((myItem: CartProductProps)=>{})
    
    useEffect(()=>{
        const instance = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 1000
        });
        instance.post('/getCart', {username: context.user})
        .then((response:CartResponse) => {
            setCartData(response.data);
        })}, [cartSize]);
    
    const buttonHandler = (myItem: CartProductProps)=> {
        const instance = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 1000
        })
        instance.post('/removeFromCart', {
            username: context.user,
            id:myItem.id    
        }).then((response)=>{
            if (response.status === 200){
                setCartSize(cartSize-1);
                console.log("removed from cart");
            }
            else{
                console.log("error")
            }
        })
    }
    return (
        <div>
            <AppContext.Provider value={context}>
                <StatusBar />
                <CartContext.Provider value={buttonHandler}>
                <Products Products={cartData} buttonText='Remove from Cart'/>
                </CartContext.Provider>
            </AppContext.Provider>
        </div>
    );
}