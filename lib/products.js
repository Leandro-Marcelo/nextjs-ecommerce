/* aquí vamos a colocar funciones que nos van a servir de forma general en nuestra aplicación */

import { getProducts } from "../services/storeService";

export async function getPathsFromTitle() {
    const products = await getProducts();

    /* // si bien esto esta bien, 
    const ids = items.map(item) => item.id;
// yo necesito retonar cosas así

return {
  params:{
    id: // cada id de los productos
  }
} */

    return products.map((product) => {
        return {
            params: {
                id: convertToPath(product.title),
            },
        };
    });
}

export async function getProductData(id) {
    const products = await getProducts();
    /* aquí usa el id como title del producto, por lo tanto, el title del producto debería ser unique porque sino siempre mostraría uno y el otro no, ya que solamente devuelve 1 coso el find*/
    const product = products.find(
        (product) => convertToPath(product.title) === id
    );
    return {
        id,
        data: product,
    };
}

/* esta función nace de no querer mostrar en la URL product/elIdDelProducto, en vez de eso quiero mostrar el nombre del producto */
export function convertToPath(title) {
    /* lo paso a lowerCase, remplazo utilizando una expresión regular que dice: \s: encontra todos los espacios vacios  /g de forma general, es decir, mas de 1, si los encuentras sustituyelos por un "-" */
    return title.toLowerCase().replace(/\s/g, "-");
}
