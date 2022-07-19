// * Aquí voy a colocar funciones que me van a servir de forma general en mi aplicación

// Components

// Config

// Contexts

// Css Modules

// Icons

// Img

// Libs

// NextJS

// React

// React Router Dom

// Redux Toolkit

// Services
import { getProducts } from "../services/storeService";

// Toast

export async function getPathsFromTitle() {
    const products = await getProducts();

    return products.map((product) => {
        return {
            params: {
                // ? Aquí uso el title del producto para que sea mi ruta dinamica, por lo tanto, el title del producto debería ser unique porque sino siempre mostraría uno y el otro no
                id: convertToPath(product.title),
            },
        };
    });
}

export async function getProductData(id) {
    const products = await getProducts();
    // TODO: Averiguar la diferencia entre find y some, Aquí como la ruta dinamica esta utilizando el title del producto, por lo tanto, el title del producto debería ser unique porque sino siempre mostraría uno y el otro no, ya que solamente devuelve 1 coso el find
    const product = products.find(
        (product) => convertToPath(product.title) === id
    );
    return {
        id,
        data: product,
    };
}

// ? Esta función nace de no querer mostrar en la URL product/${productId}, en vez de eso quiero mostrar el nombre del producto
export function convertToPath(title) {
    // ? Lo paso a lowerCase, remplazo utilizando una expresión regular que dice; \s: encuentra todos los espacios vacios,  g: de forma general, es decir, mas de 1, si los encuentras sustituyelos por un "-"
    return title.toLowerCase().replace(/\s/g, "-");
}
