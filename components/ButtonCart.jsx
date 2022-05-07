/* import { useAppContext } from "./stateWrapper"; */

export default function ButtonCart({ item }) {
    /*   const cart = useAppContext();

    function handleClick() {
        cart.addItemToCart(item);

        if (!cart.isOpen) {
            cart.openCart();
        }
    } */
    return (
        /* onClick={handleClick} */
        <button className="btn-cart">Add to the cart</button>
    );
}
