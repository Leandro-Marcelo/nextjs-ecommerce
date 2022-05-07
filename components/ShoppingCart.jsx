import Product from "./Product";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";
import style from "../styles/ShoppingCart.module.css";

/* este componente va a estar disponible en toda nuestra interface, ahora, aquí tenemos dos opciones podemos exportarlo y mandarlo a llamar en todas las secciones que queremos que aparezca o ya tenemos un componente que nos puede ayudar hacer eso y sí para eso tenemos aquí a Layout */
export default function ShoppingCart() {
    const cart = useContext(ShoppingCartContext);

    function getTotal() {
        const total = cart.products.reduce((acc, product) => {
            return (acc += product.qty * product.price);
        }, 0);
        return total;
    }

    function handleClickClose() {
        cart.closeCart();
    }

    return (
        <div
            className={style.shoppingCart}
            style={{ display: cart.isOpen ? "block" : "none" }}
        >
            <button onClick={handleClickClose} className={style.close}>
                Close
            </button>

            {/* tenemos que validar, lo que nos interesaría sería mostrar dos interfaces en nuestro carrito de compras, una interface inicial donde si nuestro carrito de compra esta vacio, simplemente muestre un diseño relativo de que no hay productos, si hay productos entonces vamos hacer una iteración/mapear para mostrar cada uno de ellos */}
            {cart.products.length === 0 ? (
                <div className={style.empty}>Cart is empty</div>
            ) : (
                <>
                    <h3>Your products</h3>
                    <div className={style.items}>
                        {cart.products &&
                            cart.products.length > 0 &&
                            cart.products.map((product, index) => (
                                <Product
                                    key={product + index.toString()}
                                    product={product}
                                    showAs="ListProduct"
                                    qty={product.qty}
                                />
                            ))}
                    </div>
                    <div className={style.total}>Total: ${getTotal()}</div>
                </>
            )}
        </div>
    );
}
