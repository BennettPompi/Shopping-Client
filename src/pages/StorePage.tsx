import React, { createContext } from 'react';
import { ProdInterface, ProdResInterface } from "../components/Product";
import { useState, useContext } from 'react';
import axios from 'axios';
import { StatusBar } from '../components/StatusBar';
import { Products } from '../components/Products';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './App';

export const StoreContext = createContext((myItem: ProdInterface)=>{})
export function StorePage(){
    const [products, setProducts]: [ProdResInterface[], any] = useState([]);
    const [cartSize, setCartSize]: [number, any] = useState(0);
    const userID = useContext(AppContext).user;
    const serverInstance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 1000
    });
    const buttonHandler = (myItem: ProdInterface)=> {
        serverInstance.post('/addToCart', {
            username: userID,
            item: {
                id:myItem.id,
                title: myItem.title,
                imgLink: myItem.imageLink,
                quantity: 1,
                price: myItem.price
        }}).then((response)=>{
            if (response.status === 200){
                setCartSize(cartSize+1);
                console.log(response.data)
            }
            else{
                console.log("error")
            }
        }
    )
    }
    const navigate = useNavigate();
    if (userID === "INVALID"){
        navigate('/');
    }
    try {
        axios.get('https://kith.com/products.json', { timeout: 500 })
            .then((response: { data: { products: ProdResInterface[]; }; }) => {
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
            <StoreContext.Provider value={buttonHandler}>
            <Products Products={products} buttonText='Add to Cart'/>
            </StoreContext.Provider>
            </div>
        </>
    )
}