/* Generalmente vamos a utilizar una sola función para hacer todo el fetching de los datos y a partir de ahí vamos a pasar esa información a otras funciones para poder manipular esa información que recibimos. */
/* Ahora bien, si tu tienes un backend, tienes un servidor web o una API, aquí mandaríamos a llamar a nuestros datos */

export async function getProducts() {
    const request = await fetch("http://localhost:3000/api/products");
    const products = await request.json();

    return products;
}

export async function getLatestProducts() {
    /* claramente no son los últimos, sin embargo, el backend si me debería mandar los últimos. Aunque mejor enfocarse en funcionalidad que destaque y que noten. Ya que si hago esto por ejemplo, ellos creerían que realmente traje los últimos xd */
    const products = await getProducts();

    return products.slice(0, 3);
}
