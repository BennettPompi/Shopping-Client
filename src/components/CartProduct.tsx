import axios from "axios";
import { useContext } from "react";

export interface CartProductProps{
    id: number;
    title: string;
    imgLink: string;
    quantity: number,
    price: number
}
export const CartProduct = (Props: CartProductProps)  =>{
    return(
            <div key={Props.id}>
                <img className="photo" src={Props.imgLink} alt={Props.title} />
                <p>{Props.title}</p>
                <button className="add-to-cart" onClick={(e: React.MouseEvent)=> {
                    const instance = axios.create({
                        baseURL: 'http://localhost:8000',
                        timeout: 1000,
                    });
                    instance.post('/removeFromCart', {
                        id:Props.id,
                        title: Props.title,
                        imgLink: Props.imgLink,
                        quantity: 1,
                        price: 1}).then((response)=>{
                        if (response.status === 200){
                            console.log("removed from cart");
                        }
                    }
                )
                }}>Remove From to Cart</button>
            </div>
    )
}