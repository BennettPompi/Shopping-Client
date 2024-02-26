import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from './App';
import { CartProducts } from '../components/CartProducts';
interface Item {
    title: string;
    imgLink: string;
    quantity: number,
    price: number
}
interface CartResponse{data: Item[]}
export function Cart() {
    const context = useContext(AppContext);
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000
    });
    const cartData = instance.post('/cart', {username: context.user})
    .then((response:CartResponse) => {
        response.data;
    });
    return (
        <div>
            <CartProducts cartData={cartData} />
        </div>
    );
}