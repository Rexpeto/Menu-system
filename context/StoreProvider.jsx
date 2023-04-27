import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    //? State from category
    const [category, setCategory] = useState();

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

    return (
        <StoreContext.Provider value={{ category }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;
