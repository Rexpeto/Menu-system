import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    //? State sidebar
    const [abs, setAbs] = useState(false);

    //? State from category
    const [category, setCategory] = useState([]);

    //? State from category actual
    const [categoryActual, setCategoryActual] = useState({});

    //? State product
    const [product, setProduct] = useState({});

    //? State loading
    const [loading, setLoading] = useState(true);

    //? State modal
    const [modal, setModal] = useState(false);

    //? Shopping Cart
    const [shopping, setShopping] = useState([]);

    //? State Steps
    const [step, setStep] = useState(1);

    //? Router next
    const router = useRouter();

    //? Getting category from api
    const getCategory = async () => {
        try {
            const { data } = await axios(
                "http://192.168.15.171:3000/api/category"
            );
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
        router.push("/");
    };

    //? handdler product
    const handdlerSetProducto = (product) => {
        setProduct(product);
    };

    //? handdler show modal
    const handdlerShowModal = () => {
        setModal(!modal);
    };

    //? handdler add in shopping cart
    const handdlerAddShopping = (product) => {
        //? Add or update shopping cart
        if (
            shopping.some(
                (productState) => productState.id === product.product.id
            )
        ) {
            const shoppingUpdate = shopping.map((productState) =>
                productState.id === product.product.id
                    ? {
                          id: product.product.id,
                          name: product.product.name,
                          price: product.product.price,
                          image: product.product.image,
                          amount: product.amount,
                      }
                    : productState
            );

            setShopping(shoppingUpdate);
            setModal(false);
            toast.success("Cantidad actualizada");
        } else {
            setShopping([
                ...shopping,
                {
                    id: product.product.id,
                    name: product.product.name,
                    price: product.product.price,
                    image: product.product.image,
                    amount: product.amount,
                },
            ]);
            setModal(false);
            toast.success("Producto agregado al carrito");
        }
    };

    //? handdlerChangeStep
    const handdlerChangeStep = (step) => {
        setStep(step);
    };

    //? handdlerDeleteProduct
    const handdlerDeleteProduct = (id) => {
        const shoppingUpdate = shopping.filter((product) => product.id !== id);
        setShopping(shoppingUpdate);
        toast.warn("Producto eliminado");
    };

    return (
        <StoreContext.Provider
            value={{
                abs,
                setAbs,
                category,
                handdlerClickCategory,
                categoryActual,
                loading,
                handdlerSetProducto,
                product,
                modal,
                handdlerShowModal,
                handdlerAddShopping,
                shopping,
                handdlerChangeStep,
                step,
                handdlerDeleteProduct,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;
