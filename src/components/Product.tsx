import { useContext } from "react";
import { AppContext } from "../pages/App";

export interface ProdInterface{
    buttonText: string;
    key: number;
    id: number;
    title: string;
    images: Image[]
    imageLink: string;
}
export interface Image{
    src: string;
  }
export const Product = (Props: ProdInterface)  =>{
    const id: number = Props.id;
    const imageLink:string = Props.imageLink;
    const title: string = Props.title;
    const context = useContext(AppContext);
    return(
            <div key={id}>
                <img className="photo" src={imageLink} alt={title} />
                <p>{title}</p>
                <button className="add-to-cart" onClick={(e: React.MouseEvent)=> {

                }}>{Props.buttonText}</button>
            </div>
    )
}