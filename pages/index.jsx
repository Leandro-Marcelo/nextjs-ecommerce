// Components
import Layout from "../components/Layout";
import Product from "../components/Product";

// Config

// Css Module
import style from "../styles/Home.module.css";
import styleProduct from "../styles/Product.module.css";

// Icons

// Img

// React

// React Router Dom

// Redux Toolkit

// Services
import { getLatestProducts } from "../services/storeService";

// Toast

// ? Tipo como un useEffect (OJO que es Async)
export async function getStaticProps() {
    const latestProducts = await getLatestProducts();

    return {
        props: {
            latestProducts,
        },
    };
}

export default function Home({ latestProducts }) {
    return (
        <div>
            <Layout>
                <div className={style.banner}>
                    <div className={style.bannerBackground}>
                        <div className={style.bannerInfo}>
                            <h2>Shop the Winter 2022 Collection</h2>
                            <p>
                                Level up your comfort this season with our new
                                Winter Collection — all new joggers, beanies,
                                drinkware, and for the first time ever,
                                Octocookie cutters!
                            </p>
                        </div>
                    </div>
                </div>

                <h3>Latest Products</h3>
                <div className={styleProduct.items}>
                    {latestProducts &&
                        latestProducts.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                showAs="product"
                            />
                        ))}
                </div>
            </Layout>
        </div>
    );
}
