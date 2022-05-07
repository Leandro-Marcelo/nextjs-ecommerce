import Layout from "../components/layout";
import Product from "../components/Product";
import style from "../styles/Home.module.css";
import { getLatestProducts } from "../services/storeService";
import styleProduct from "../styles/product.module.css";

export default function Home({ latestProducts }) {
    return (
        <div>
            <Layout>
                <div className={style.banner}>
                    <div className={style.bannerBackground}>
                        <div className={style.bannerInfo}>
                            <h2>Shop the Winter 2021 Collection</h2>
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

export async function getStaticProps() {
    const latestProducts = await getLatestProducts();

    return {
        props: {
            latestProducts,
        },
    };
}
