import { ProdInterface, ProdResInterface, Product } from "./Product";
interface ProductsProps{
    Products: ProdResInterface[];
    buttonText: string;
}
export function Products(Props: ProductsProps){
    return <>{Props.Products.map((product: ProdResInterface) => {
        const prodProps: ProdInterface = {
            buttonText: Props.buttonText,
            id: product.id,
            title: product.title,
            imageLink: product.images[0].src,
            price: product.variants[0].price
        }
        return(
          Product(prodProps)
        )
    })}</>}