import Image from "next/image";
import useStore from "@/hooks/useStore";

const OrderCard = ({ product }) => {
    const { handdlerDeleteProduct } = useStore();

    return (
        <div className="flex flex-col relative md:flex-row gap-2 md:gap-10 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <Image
                width={300}
                height={200}
                alt={product?.name}
                src={`/assets/img/${product?.image}.jpg`}
                className="md:rounded-lg w-full md:w-auto"
            />
            <div className="flex flex-col gap-3 p-4 md:p-2">
                <h2 className="text-2xl font-bold">{product?.name}</h2>
                <h3 className="text-xl font-bold">${product?.price}</h3>
                <p>{`Cantidad: ${product?.amount}`}</p>
                <p>
                    Precio: <span className="font-bold">${product.price}</span>
                </p>
                <p>
                    SubTotal:{" "}
                    <span className="font-bold">{`$${parseInt(
                        product?.amount * product.price
                    )}`}</span>
                </p>
            </div>
            <button
                className="absolute right-[-3px] top-[-10px] bg-red-600 hover:bg-red-700 transition duration-150 p-4 rounded-sm"
                onClick={() => handdlerDeleteProduct(product.id)}
            >
                x
            </button>
        </div>
    );
};

export default OrderCard;
