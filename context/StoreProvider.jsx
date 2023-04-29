import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    //? State from category
    const [category, setCategory] = useState([]);

    //? State from category actual
    const [categoryActual, setCategoryActual] = useState({});

    //? State product
    const [product, setProduct] = useState({});

    //? State loading
    const [loading, setLoading] = useState(true);

    //? Getting category from api
    const getCategory = async () => {
        try {
            const { data } = await axios("http://localhost:3000/api/category");
            setCategory(data);
        } catch (error) {
            console.log(error);
        }
    };

    //? Call function
    useEffect(() => {
        getCategory();
    }, []);

    //? Category default
    useEffect(() => {
        setCategoryActual(category[0]);
        setLoading(false);
    }, [category]);

    //? handdler category actual
    const handdlerClickCategory = (id) => {
        const actual = category.filter((c) => c.id === id)[0];
        setCategoryActual(actual);
    };

    //? handdler product
    const handdlerSetProducto = (product) => {
        setProduct(product);
    };

    return (
        <StoreContext.Provider
            value={{
                category,
                handdlerClickCategory,
                categoryActual,
                loading,
                handdlerSetProducto,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;
