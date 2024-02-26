import { useContext } from "react";
import { StoreContext } from "../pages/StorePage";

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
    const storeContext = useContext(StoreContext);
    return(
            <div key={id}>
                <img className="photo" src={imageLink} alt={title} />
                <p>{title}</p>
                <button className="add-to-cart" onClick={(e: React.MouseEvent)=> {
                    storeContext.instance.post('/addToCart', {
                        id:id,
                        title: title,
                        imgLink: imageLink,
                        quantity: 1,
                        price: 1}).then((response)=>{
                        if (response.status === 200){
                            storeContext.setCartSize(storeContext.cartSize+1);
                        }
                    }
                )
                }}>{Props.buttonText}</button>
            </div>
    )
}