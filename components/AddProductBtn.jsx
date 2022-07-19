// Components

// Config

// Contexts
import ShoppingCartContext from "../context/ShoppingCartContext";

// Css Modules

// Icons

// Img

// Libs

// NextJS

// React
import { useContext } from "react";

// React Router Dom

// Redux Toolkit

// Services

// Toast

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
