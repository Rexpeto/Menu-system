import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const Layout = ({ children, title = "Inicio" }) => {
    return (
        <>
            <Head>
                <title>{`Vyper - ${title}`}</title>
                <meta
                    name="description"
                    content="Vyper es un sistema de menú de restaurante"
                />
            </Head>

            <div className="flex text-white">
                <Sidebar />
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 p-6">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
