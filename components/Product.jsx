import Link from "next/link";
import { convertToPath } from "../lib/products";
import style from "../styles/Product.module.css";
import Image from "next/image";
import ButtonCart from "./buttonCart";

/* Aquí vamos a renderizar nuestro producto, pero aquí podemos hacer varias cosas por ejemplo, podríamos mostrar nuestro producto en diferentes componentes dependiendo la presentación que queremos dar. A que me refiero, cuando tenemos nuestra tienda y vemos los productos va haber un diseño específico, cuando yo agregue ese producto a mi carrito de compras va haber otro diseño, y cuando yo le de click para ir a su página o a su ruta personalizada podría utilizar ese mismo componente u otro para mostrar esa información. La realidad es que ahí podemos hacer 3 componentes o podríamos hacer que un solo componente renderizara 3 diseños diferentes, podríamos hacerlo así para ahorrarnos el estar definiendo 3 componentes. */
/* props: product:product, qty:, showAs:como mostrar */
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
                        <ButtonCart product={product} />
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
                <ButtonCart product={product} />
            </div>
        </div>
    );
}
