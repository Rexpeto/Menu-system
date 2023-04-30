import { useEffect, useState } from "react";
import Image from "next/image";
import useStore from "@/hooks/useStore";
import { RiCloseLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const ModalProduct = () => {
    const { product, handdlerShowModal, handdlerAddShopping, shopping } =
        useStore();
    const [amount, setAmount] = useState(1);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (shopping.some((productState) => productState.id === product.id)) {
            const productEdit = shopping.find(
                (productState) => productState.id === product.id
            );
            setEdit(true);
            setAmount(productEdit.amount);
        }
    }, [shopping, product]);

    return (
        <>
            <div className="flex justify-end">
                <button
                    className="text-3xl my-3"
                    onClick={() => handdlerShowModal()}
                >
                    <RiCloseLine />
                </button>
            </div>
            <div className="flex flex-row items-start gap-4">
                <div className="md:w-1/3">
                    <Image
                        className="rounded-lg"
                        width={300}
                        height={400}
                        src={`/assets/img/${product.image}.jpg`}
                        alt={product.name}
                    />
                </div>
                <div className="md:w-2/3 flex flex-col gap-4">
                    <h1 className="text-3xl">{product.name}</h1>
                    <p className="font-bold text-2xl">${product.price}</p>
                    <div className="flex gap-3 items-center self-center mb-10">
                        <button
                            className="text-4xl"
                            onClick={
                                amount > 1 ? () => setAmount(amount - 1) : null
                            }
                        >
                            <AiOutlineMinusCircle />
                        </button>
                        <p className="text-xl">{amount}</p>
                        <button
                            className="text-4xl"
                            onClick={
                                amount < 10 ? () => setAmount(amount + 1) : null
                            }
                        >
                            <AiOutlinePlusCircle />
                        </button>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-3 py-2 text-lg font-medium text-white rounded-lg hover:bg-blue-800 outline-none bg-blue-600 dark:hover:bg-blue-700 transition duration-150"
                        onClick={() => handdlerAddShopping({ product, amount })}
                    >
                        <BsCartPlus />
                        {edit ? "Editar" : "Ordenar"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalProduct;
