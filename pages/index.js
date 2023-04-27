import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";

const Home = () => {
    const { categoryActual } = useStore();
    return (
        <Layout title={`Menú ${categoryActual?.name}`}>
            <h2 className="font-bold text-2xl uppercase">{categoryActual?.name}</h2>
        </Layout>
    );
};

export default Home;
