// Components
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import ShoppingCart from "../../components/ShoppingCart";

// Config

// Contexts

// Css Modules

// Icons

// Img

// Libs
import { getProductData, getPathsFromTitle } from "../../lib/products";

// NextJS

// React

// React Router Dom

// Redux Toolkit

// Services

// Toast

// * Acá estoy generando rutas dinamicas para cada uno de mis productos
// * NextJS no tiene una forma específica de saber cuales son los ids para las rutas dinamicas, necesito crear una serie de funciones para generar primero todos esos ids, luego definir las rutas a partir de esos ids para que finalmente vaya como parametro de ProductPage, de esta forma, NextJS sabrá el producto por el cual esta navegando el usuario

// ? Me permite generar las rutas dinamicas para cada uno de mis productos
// ? Se ejecuta cuando voy a un producto específico
export async function getStaticPaths() {
    // ? Me regresa todos los ids de mis productos, para eso no voy hacer uso de la carpeta services ya que eso es solo para el fetching, aquí ya necesito hacer operaciones con la información
    const paths = await getPathsFromTitle();

    return {
        paths,
        // ?
        fallback: false,
    };
}

// ? Desestructuro el return de arriba para obtener el id (el cual es el title del producto pero donde los espacios se reemplazaron por -) de mi ruta dinamica
export async function getStaticProps({ params }) {
    const id = params.id;
    const productInfo = await getProductData(id);

    return {
        props: {
            productInfo,
        },
    };
}

export default function ProductPage({ productInfo }) {
    return (
        <Layout product={productInfo.data.title}>
            <Product product={productInfo.data} showAs="Page" />
            {/*// TODO: PARA QUÉ LEAN O VIDAMMR <ShoppingCart /> */}
        </Layout>
    );
}
