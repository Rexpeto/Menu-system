import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";
import OrderCard from "@/components/order/OrderCard";

const Resumen = () => {
    const { shopping } = useStore();
    return (
        <Layout title="Ordenes">
            <h1 className="text-4xl font-bold mb-5">Ordenes</h1>
            <div className="flex flex-col gap-4">
                {shopping ? (
                    shopping.map((product) => (
                        <OrderCard product={product} key={product.id} />
                    ))
                ) : (
                    <h2>No hay productos</h2>
                )}
            </div>
        </Layout>
    );
};

export default Resumen;
