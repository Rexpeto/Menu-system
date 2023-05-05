import Head from "next/head";
import Image from "next/image";
import useStore from "@/hooks/useStore";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutAdmin = ({ children, title }) => {
    const { abs, setAbs } = useStore();
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
                <div
                    className={`${
                        abs ? "w-[3rem]" : "w-[25rem]"
                    } bg-gray-800 h-screen flex flex-col justify-between gap-4 py-2 overflow-x-hidden transition-all duration-150`}
                >
                    <div className="flex flex-col gap-2">
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
                        <nav className="flex flex-col w-full gap-4 px-2"></nav>
                        <button
                            className="flex justify-end hover:bg-gray-600 rounded-lg outline-none text-2xl py-2 gap-7 transition duration-150 px-2"
                            onClick={() => setAbs(!abs)}
                        >
                            {abs ? <BsArrowBarRight /> : <BsArrowBarLeft />}
                        </button>
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
