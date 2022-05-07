// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* vamos a utilizar esta estructura para simular que estamos llamando a una API, teorícamente lo que tendríamos que hacer pues si sería hacer un fetch a un servidor web, a un endpoint, a una API, etc. Pero como aun no implemento el backend, voy a simular un backend */
export default function handler(req, res) {
    res.status(200).json([
        {
            id: 0,
            title: "Figurita octocat",
            price: 100,
            image: "http://localhost:3000/img/octocat.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 1,
            title: "Gorra",
            price: 200,
            /* de esta forma estoy haciendo una solicitud http a localhost:3000/img/octocat.webp, si nosotros utilizaramos otro servidor web para almacenar imagenes u otro servicio en la nube, aquí tendríamos que colocar toda la dirección. Como acá estamos simulando una API, no podemos utilizar una dirección relativa a nuestro proyecto, tenemos que usar toda la URL absoluta porque de esa forma vamos a utilizar otro componente que tiene NextJS para poder renderizar estas imagenes. */
            image: "http://localhost:3000/img/mug.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 2,
            title: "Sudadera Halo",
            price: 200,
            image: "http://localhost:3000/img/tshirt01.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 3,
            title: "Introvert T-shirt",
            price: 200,
            image: "http://localhost:3000/img/tshirt02.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 4,
            title: "Invertocat 2.0 Coasters",
            price: 30,
            image: "http://localhost:3000/img/coaster01.webp",
            description:
                "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand.",
        },
        {
            id: 5,
            title: "Glow in the Dark Sticker Pack",
            price: 5,
            image: "http://localhost:3000/img/stickers02.webp",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
        },
        {
            id: 6,
            title: "Adventure Sticker Pack",
            price: 10,
            image: "http://localhost:3000/img/stickers01.webp",
            description:
                "We’re going on an adventure! Let your imagination wander with the new Adventure  Sticker Pack. With several never before printed Octocats and some old friends, this pack is here to celebrate the journey as much as the end.",
        },
        {
            id: 7,
            title: "Invertocat Pullover Hoodie",
            price: 10,
            image: "http://localhost:3000/img/pullover01.webp",
            description:
                "While there’s nothing like an original black GitHub hoodie, these new pullover hoodies are an instant classic. Featuring tone-on-tone embroidered Invertocats on the chest and wrist, these understated hoodies will have you looking so fresh and so clean (and so warm!).",
        },
    ]);
}
