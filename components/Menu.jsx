import Link from "next/link";
import style from "../styles/Menu.module.css";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

export default function Menu() {
    const cart = useContext(ShoppingCartContext);

    function handleClickCart(e) {
        e.preventDefault();
        cart.openCart();
    }
    return (
        <nav className={style.menu}>
            <div>
                <Link href="/">
                    <a className={style.link}>Home</a>
                </Link>

                <Link href="/store">
                    <a className={style.link}>Store</a>
                </Link>

                <Link href="/faq">
                    <a className={style.link}>FAQ</a>
                </Link>
            </div>

            <div>
                <a href="#" className={style.link} onClick={handleClickCart}>
                    Carrito ({cart.getNumberOfProducts()})
                </a>
            </div>
        </nav>
    );
}
