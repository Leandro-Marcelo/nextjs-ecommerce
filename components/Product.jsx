// Components
import AddProductBtn from "./AddProductBtn";

// Config

// Contexts

// Css Modules
import style from "../styles/Product.module.css";

// Icons

// Img

// Libs
import { convertToPath } from "../lib/products";

// NextJS
import Image from "next/image";
import Link from "next/link";

// React

// React Router Dom

// Redux Toolkit

// Services

// Toast

// ? Aquí voy a renderizar mi producto, pero aquí puedo hacer varias cosas por ejemplo, podría mostrar mi producto en diferentes componentes dependiendo la presentación que quiero dar. A que me refiero, Lean, cuando un usuario entre a mi tienda y vea los productos va haber un diseño específico, cuando yo el agregue ese producto a su carrito de compras va haber otro diseño, y cuando le de click para ir a su página o a su ruta personalizada podría utilizar ese mismo componente u otro para mostrar esa información. La realidad es que ahí puedo hacer 3 componentes o podría hacer que un solo componente renderizara 3 diseños diferentes, podría hacerlo así para ahorrarme el estar definiendo 3 componentes.
export default function Product({ product, qty = 0, showAs }) {
    if (showAs === "Page") {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={product.image}
                        alt="Picture of the author"
                        width={800}
                        height={800}
                    />
                </div>
                <div className={style.info}>
                    <div>
                        <h2>{product.title}</h2>
                    </div>
                    <div className={style.price}>${product.price}</div>
                    <div>{product.description}</div>
                    <div>
                        <AddProductBtn product={product} />
                    </div>
                </div>
            </div>
        );
    }

    if (showAs === "ListProduct") {
        return (
            <div className={style.listItem}>
                <div>
                    <Image
                        src={product.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <div>{product.title}</div>
                    <div>${product.price}</div>
                    {/*//? aquí valido la cantidad, ya que si la cantidad es 0 no debería ni mostrar las unidades ni tampoco el subtotal */}
                    {qty === 0 ? "" : <div>{qty} units</div>}

                    {qty === 0 ? (
                        ""
                    ) : (
                        <div>Subtotal: ${qty * product.price}</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(product.title)}`}>
                    <a>
                        <Image
                            src={product.image}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link href={`/store/${convertToPath(product.title)}`}>
                        <a>{product.title}</a>
                    </Link>
                </h3>
            </div>
            <div>${product.price}</div>
            <div>
                <AddProductBtn product={product} />
            </div>
        </div>
    );
}
