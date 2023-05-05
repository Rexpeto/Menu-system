import Image from "next/image";

const OrderList = ({ order }) => {
    const { name, products, total, date } = order;
    console.log(order);

    return (
        <div className="w-full p-4 rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
            <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
            <div className="flex flex-col gap-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-4 mb-2"
                    >
                        <div className="w-32">
                            <Image
                                src={`/assets/img/${product.image}.jpg`}
                                alt={product.name}
                                height={300}
                                width={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5 className="text-2xl font-bold">
                                {product.name}
                            </h5>
                            <p>
                                Cantidad:{" "}
                                <span className="font-bold">
                                    {product.amount}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <h2 className="text-2xl">
                        Total: <span className="font-bold">${total}</span>
                    </h2>
                    <button
                        type="button"
                        className="block w-full md:w-min items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-green-800 outline-none bg-green-600 dark:hover:bg-green-700 transition duration-150"
                    >
                        Aprobar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
