// * Generalmente vamos a utilizar una sola función para hacer todo el fetching de los datos y a partir de ahí vamos a pasar esa información a otras funciones para poder manipular esa información que recibimos.
// * Ahora bien, si tuviera un backend, un servidor web o una API, aquí mandaríamos a llamar a nuestros datos

export async function getProducts() {
    console.log(process.env.VERCEL_URL);
    /* http://localhost:3000 */
    const request = await fetch(`${process.env.VERCEL_URL}/api/products`);
    console.log(`ERRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOORRRRRRRRR`);
    console.log(request);
    const products = await request.json();
    console.log(`ERRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOORRRRRRRRR`);
    console.log(products);

    return products;
}

export async function getLatestProducts() {
    // ? Claramente no son los últimos, sin embargo, el backend si me debería mandar los últimos.
    const products = await getProducts();

    return products.slice(0, 3);
}
