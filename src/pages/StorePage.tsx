import React, { createContext } from 'react';
import { ProdInterface } from "../components/Product";
import { useState, useContext } from 'react';
import axios from 'axios';
import { StatusBar } from '../components/StatusBar';
import { Products } from '../components/Products';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './App';

export const StoreContext = createContext({instance: axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000
}), cartSize:0, setCartSize: (newSize: number)=>{}})
export function StorePage(){
    const [products, setProducts]: [ProdInterface[], any] = useState([]);
    const [cartSize, setCartSize]: [number, any] = useState(0);
    const userID = useContext(AppContext).user;
    const serverInstance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000
    });
    const navigate = useNavigate();
    if (userID === "INVALID"){
        navigate('/');
    }
    try {
        axios.get('https://kith.com/products.json', { timeout: 500 })
            .then((response: { data: { products: ProdInterface[]; }; }) => {
                setProducts(response.data.products);
            }).catch((error: any) => { console.log(error); });
    }
    catch (e) {
        console.log(e);
    }
    return (
        <>
            <StatusBar />
            <div className="App-body">
            <StoreContext.Provider value={{instance: serverInstance, cartSize:cartSize,setCartSize: setCartSize}}>
            <Products Products={products} />
            </StoreContext.Provider>
            </div>
        </>
    )
}