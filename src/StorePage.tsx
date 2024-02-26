import React from 'react';
import { ProdInterface } from "./Product";
import { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { StatusBar } from './StatusBar';
import { Products } from './Products';
export function StorePage(){
    const [products, setProducts]: [ProdInterface[], any] = useState([]);
    const [cartSize, setCartSize]: [number, any] = useState(0);
    const [userID, setUserID]: [string, any] = useState("INVALID");

    try{
    axios.get('https://kith.com/products.json',{timeout: 500})
    .then((response: { data: { products: ProdInterface[]; }; }) => {
      setProducts(response.data.products);
      }).catch((error: any) => {console.log(error);});
    }
    catch(e){
      console.log(e);
    }
    return(
        <>
        <StatusBar/>
        <Products Products={products}/>
        </>
    )
}