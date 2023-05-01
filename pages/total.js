import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";

const Total = () => {
    const { shopping, client, setClient, total } = useStore();

    return (
        <Layout title="Total">
            <h1 className="text-4xl font-bold">Pagar</h1>

            {shopping.length ? (
                <div className="grid grid-cols-1 md:grid-cols-1-2 gap-10 md:gap-4 mt-5">
                    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                                    >
                                        Producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cantidad
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                                    >
                                        Precio
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shopping.map((product) => (
                                    <tr
                                        className="border-b border-gray-200 dark:border-gray-700"
                                        key={product?.id}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                                        >
                                            {product?.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {product?.amount}
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            ${product?.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            ${product?.price * product?.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <form>
                        <div className="relative z-0 w-full mb-6 mt-5 group">
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                suggestion="false"
                                onChange={(e) => setClient(e.target.value)}
                                value={client}
                            />
                            <label
                                htmlFor="nombre"
                                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Nombre de cliente
                            </label>
                        </div>
                        <h3 className="mb-5 text-2xl">
                            Total: <span className="font-bold">${total}</span>
                        </h3>
                        <button
                            type="submit"
                            className="text-white outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 transition duration-150"
                        >
                            Realizar Pedido
                        </button>
                    </form>
                </div>
            ) : (
                <h3 className="text-lg mt-4">Agregue productos</h3>
            )}
        </Layout>
    );
};

export default Total;
