// Components
import Product from "./Product";

// Config

// Contexts
import ShoppingCartContext from "../context/ShoppingCartContext";

// Css Modules
import style from "../styles/ShoppingCart.module.css";

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

// ? Este componente quiero que esté disponible en todas mis interfaces, ahora, aquí tengo dos opciones, puedo exportarlo y mandarlo a llamar en todas las secciones que quiero que aparezca o ya tengo un componente que me puede ayudar hacer eso, y sí Lean, para eso tenemos aquí a Layout
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

            {/*//? tengo que validar, lo que me interesaría mostrar tipo como dos interfaces en nuestro carrito de compras, una interface inicial donde si nuestro carrito de compra esta vacio, simplemente muestre un diseño relativo de que no hay productos, si hay productos entonces vamos hacer una iteración/mapear para mostrar cada uno de ellos */}
            {cart.products.length === 0 ? (
                <div className={style.empty}>Cart is empty</div>
            ) : (
                <>
                    <h3>Your products</h3>
                    <div className={style.items}>
                        {cart.products &&
                            cart.products.length > 0 &&
                            cart.products.map((product, index) => {
                                // TODO: Por qué hace esto? Si podía poner simplemente product.id
                                console.log(product + index.toString());

                                return (
                                    <Product
                                        key={product + index.toString()}
                                        product={product}
                                        showAs="ListProduct"
                                        qty={product.qty}
                                    />
                                );
                            })}
                    </div>
                    <div className={style.total}>Total: ${getTotal()}</div>
                </>
            )}
        </div>
    );
}
