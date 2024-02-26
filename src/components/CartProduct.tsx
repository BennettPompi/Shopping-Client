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

                }}>Add to Cart</button>
            </div>
    )
}