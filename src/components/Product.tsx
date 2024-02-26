import { useContext } from "react";
import { StoreContext } from "../pages/StorePage";

export interface ProdResInterface{
    id: number;
    title: string;
    images: Image[]
    imageLink: string;
    variants:[{price: number;}]
}
export interface ProdInterface{
    buttonText: string;
    id: number;
    title: string;
    imageLink: string;
    price: number;
}
export interface Image{
    src: string;
  }
export const Product = (Props: ProdInterface)  =>{
    const id: number = Props.id;
    const imageLink:string = Props.imageLink;
    const title: string = Props.title;
    const context = useContext(StoreContext);
    return(
            <div key={id}>
                <img className="photo" src={imageLink} alt={title} />
                <p>{title}: ${Props.price}</p>
                <button className="add-to-cart" onClick={(e:any)=>context(Props)}>{Props.buttonText}</button>
            </div>
    )
}