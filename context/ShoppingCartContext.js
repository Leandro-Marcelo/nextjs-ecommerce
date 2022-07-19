import { createContext, useState } from "react";

// ? Lo que va dentro de createContext es simplemente la definición de las propiedades de este objeto, cuando vayamos a llamar la función, vamos a pasarle la función ya implementada
const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);

    function handleOpenCart() {
        setIsOpen(true);
    }

    function handleCloseCart() {
        setIsOpen(false);
    }

    function handleAddProductToCart(product) {
        // ? Primero necesito un temporal
        const temp = [...products];
        // ? Ahora necesito agregar el producto, pero primero necesito saber si ya existe en mi carrito de compras
        const found = temp.find((el) => el.id === product.id);
        // ? si el producto ya se encuentra entonces solo vamos actualizar la propiedad de cantidad, en caso contrario voy agregar ese producto al carrito y establecerle la cantidad como uno
        if (found) {
            // ? qty significa cantidad
            found.qty++;
        } else {
            product.qty = 1;
            temp.push(product);
        }
        setProducts([...temp]);
    }

    function getNumberOfProducts() {
        const total = products.reduce((acc, product) => {
            return (acc += product.qty);
        }, 0);
        return total;
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                products,
                isOpen,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addProductToCart: handleAddProductToCart,
                getNumberOfProducts: getNumberOfProducts,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

// ? lo exportamos acá bajo como aprendimos de JM y como lo hago en el backend con module.exports xd
export { ShoppingCartProvider };
export default ShoppingCartContext;
