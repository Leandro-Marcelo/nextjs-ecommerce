// * Ahora yo tradicionalmente en React, estaría utilizando un useEffect luego utilizo un fetch etc. La realidad es que NextJS ya me proporciona una función que se va a ejecutar en el tiempo de compilación cuando este generando mis archivos finales y lo que va hacer es correr esa función, va a ordenar toda la información y al final la va a inyectar dentro de nuestra página (yo específico que página). Entonces no voy a utilizar useEffect para la obtención de datos.

// Components
import Layout from "../../components/Layout";
import Product from "../../components/Product";

// Config

// Contexts

// Css Modules
import styleProduct from "../../styles/Product.module.css";

// Icons

// Img

// Libs

// NextJS

// React

// React Router Dom

// Redux Toolkit

// Services
import { getProducts } from "../../services/storeService";

// Toast

// * NextJS nos permite utilizar una función dentro de nuestro componente especial para poder hacer Static Generation
// * Lo que quiero hacer, es que esta función se ejecute en el momento que se compila nuestro código y lo que voy hacer es obtener los datos en este caso de mi API, voy a tener esos datos y voy a darle un formato que me pide NextJS y el resultado de eso va a ser una propiedad o un props que le voy a inyectar a mi componente de Index
export async function getStaticProps() {
    const products = await getProducts();

    return {
        props: {
            products,
        },
    };
}

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
