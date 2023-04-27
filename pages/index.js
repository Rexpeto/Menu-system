import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";
import Products from "@/components/Products";

const Home = () => {
    const { categoryActual } = useStore();
    return (
        <Layout title={`Menú ${categoryActual?.name}`}>
            <h2 className="font-bold text-2xl uppercase mb-6">
                {categoryActual?.name}
            </h2>
            <Products products={categoryActual?.products} />
        </Layout>
    );
};

export default Home;
