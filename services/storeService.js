// * Generalmente vamos a utilizar una sola función para hacer todo el fetching de los datos y a partir de ahí vamos a pasar esa información a otras funciones para poder manipular esa información que recibimos.
// * Ahora bien, si tuviera un backend, un servidor web o una API, aquí mandaríamos a llamar a nuestros datos

export async function getProducts() {
    const request = await fetch(
        `https://nextjs-ecommerce-henna.vercel.app/api/products`
    );

    const products = await request.json();

    /* const products = [
        {
            id: 0,
            title: "Figurita octocat",
            price: 100,
            image: `https://i.imgur.com/2JGBM7g.png`,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 1,
            title: "Gorra",
            price: 200,
            // ? Estoy haciendo una solicitud http a localhost:3000/img/octocat.webp, ya que si utilizara otro servidor web para almacenar imagenes u otro servicio en la nube, aquí tendría que colocar toda la dirección. Como acá estoy simulando una API, no puedo utilizar una dirección relativa a mi proyecto, tengo que usar toda la URL absoluta porque de esa forma voy a utilizar otro componente que tiene NextJS para poder renderizar estas imagenes.
            image: `https://i.imgur.com/JUrUf9g.png`,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 2,
            title: "Sudadera Halo",
            price: 200,
            image: `https://i.imgur.com/NVTT6W2.png`,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 3,
            title: "Introvert T-shirt",
            price: 200,
            image: `https://i.imgur.com/USdFRKm.png`,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 4,
            title: "Invertocat 2.0 Coasters",
            price: 30,
            image: `https://i.imgur.com/upsHMEV.png`,
            description:
                "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
        },
        {
            id: 5,
            title: "Glow in the Dark Sticker Pack",
            price: 5,
            image: `https://i.imgur.com/8hVhCqz.png`,
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 6,
            title: "Adventure Sticker Pack",
            price: 10,
            image: `https://i.imgur.com/QODfeBd.png`,
            description:
                "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
        },
        {
            id: 7,
            title: "Invertocat Pullover Hoodie",
            price: 10,
            image: `https://i.imgur.com/QolBU7h.png`,
            description:
                "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
        },
    ]; */

    return products;
}

export async function getLatestProducts() {
    // ? Claramente no son los últimos, sin embargo, el backend si me debería mandar los últimos.
    const products = await getProducts();

    return products.slice(0, 3);
}
