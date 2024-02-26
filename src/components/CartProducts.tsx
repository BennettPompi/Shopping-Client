import { ProdInterface, Product } from "./Product";
import {CartProduct, CartProductProps} from "./CartProduct";

interface ProductsProps{
    Products: CartProductProps[];
}
export function CartProducts(Props: ProductsProps){
    return <>{Props.Products.map((product: CartProductProps) => {
        return(
            CartProduct({id: product.id, title: product.title, imgLink: product.imgLink, 
                quantity: product.quantity, price: product.price})
        )
    })}</>}