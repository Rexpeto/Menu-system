import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutAdmin = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{`Vyper - ${title}`}</title>
                <meta
                    name="description"
                    content="Vyper es un sistema de menú de restaurante"
                />
            </Head>

            <ToastContainer theme="dark" />

            <div className="flex text-white transition duration-150">
                <div className="w-[15rem] bg-gray-800 h-screen flex flex-col justify-between gap-4 py-2 overflow-x-hidden transition-all duration-150">
                    <div className="flex items-center gap-4 px-1 py-2 border-b border-b-gray-700">
                        <Image
                            src="./favicon.svg"
                            width={30}
                            height={30}
                            alt="Vyper Logo"
                        />
                        <h2 className="font-bold">
                            Vyper <span className="font-normal">Menú</span>
                        </h2>
                    </div>
                </div>
                <main className="w-full p-6 overflow-y-scrol h-screen overflow-y-scroll">
                    {children}
                </main>
            </div>
        </>
    );
};

export default LayoutAdmin;
