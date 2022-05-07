import Layout from "../../components/Layout";
import Product from "../../components/Product";
import ShoppingCart from "../../components/ShoppingCart";
import { getProductData, getPathsFromTitle } from "../../lib/products";

/* Acá estamos generando rutas dinamicas para cada uno de nuestros productos */
/* NextJS no tiene una forma específica de saber cuales son los ids para las rutas dinamicas, necesitamos crear una serie de funciones para generar primero todos esos ids, luego definir las rutas a partir de esos ids para que finalmente vaya como parametro de ProductPage, de esta forma, NextJS sabrá el producto por el cual esta navegando el usuario */
export default function ProductPage({ productInfo }) {
    return (
        <Layout product={productInfo.data.title}>
            <Product product={productInfo.data} showAs="Page" />
            <ShoppingCart />
        </Layout>
    );
}

/* nos permite generar las rutas dinamicas para cada uno de nuestros productos */
export async function getStaticPaths() {
    /* me regresa todos los ids de mis productos, para eso no vamos hacer uso de la carpeta services ya que eso es solo para el fetching, aquí ya necesito hacer operaciones con la información */
    const paths = await getPathsFromTitle();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const productInfo = await getProductData(id);

    return {
        props: {
            productInfo,
        },
    };
}
