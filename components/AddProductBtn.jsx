import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

export default function AddProductBtn({ product }) {
    const cart = useContext(ShoppingCartContext);

    function handleClick() {
        cart.addProductToCart(product);

        if (!cart.isOpen) {
            cart.openCart();
        }
    }
    return (
        <button className="btn-cart" onClick={handleClick}>
            Add to the cart
        </button>
    );
}
