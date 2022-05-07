import Layout from "../../components/layout";
import Product from "../../components/Product";
import { getProducts } from "../../services/storeService";
import styleProduct from "../../styles/product.module.css";

/* Ahora nosotros tradicionalmente en React, estaríamos utilizando un useeffect, utilizar un fetch etc. La realidad es que NextJS ya nos proporciona una función que se va a ejecutar en el tiempo de compilación cuando estemos generando nuestros archivos finales y lo que va hacer es correr esa función va a ordenar toda la información y al final la va a inyectar dentro de nuestra página. Entonces no vamos a utilizar useefect para la obtención de datos. */

export default function Index({ products }) {
    return (
        <Layout>
            <div className={styleProduct.items}>
                {products &&
                    products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            showAs="product"
                        />
                    ))}
            </div>
        </Layout>
    );
}

/* NextJS nos permite utilizar una función dentro de nuestro componente especial para poder hacer Static Generation */
/* Lo que queremos hacer, es que esta función se ejecute, en el momento que se compila nuestro código y lo que vamos hacer es obtener los datos en este caso de nuestra API, vamos a tener esos datos y vamos dar un formato que nos pide NextJS y el resultado de eso va a ser una propiedad o un props que vamos a inyectar en nuestro componente de Index  */
export async function getStaticProps() {
    const products = await getProducts();

    return {
        props: {
            products,
        },
    };
}
