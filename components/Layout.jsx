import Head from "next/head";
import Menu from "./Menu.jsx";
import style from "../styles/Layout.module.css";
import ShoppingCart from "./ShoppingCart";

export default function Layout({ children, title }) {
    return (
        <div>
            {/* Esto es importante porque nos permite definir, todo el tema nivel digamos de HTML de lo que existe dentro nuestra etiqueta de Head, aquí como estamos manejando componentes con JS, digamos que no tenemos acceso al archivo tal cual del HTML para colocar todas estas etiquetas que al final son de metadatos. Entonces NextJS ya nos da la posibilidad de utilizar un componente especial que se llama Head, este ya viene por defecto importado en index.js */}
            <Head>
                <title>Github Merch {title ? ` | ${title}` : ""}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <div className={style.container}>{children}</div>
            <ShoppingCart />
        </div>
    );
}