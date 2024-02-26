import { ProdInterface, Product } from "./Product";
interface ProductsProps{
    Products: ProdInterface[];
}
export function Products(Props: ProductsProps){
    Props.Products.map((product: ProdInterface) => {
        return(
          Product({id: product.id, title: product.title, images: product.images, imageLink: product.images[0].src, key: product.id
        })
        )
    })}