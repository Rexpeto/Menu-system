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

            <div className="flex text-white transition duration-150">
                <Sidebar />
                <main className="w-full p-6 overflow-y-scrol h-screen overflow-y-scroll">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
