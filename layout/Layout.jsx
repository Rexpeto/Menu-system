import Head from "next/head";
import Modal from "react-modal";
import useStore from "@/hooks/useStore";
import Sidebar from "@/components/Sidebar";
import ModalProduct from "@/components/ModalProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "@/components/Steps";

const customStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#__next");

const Layout = ({ children, title = "Inicio" }) => {
    const { modal } = useStore();

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
                <Sidebar />
                <main className="w-full p-6 overflow-y-scrol h-screen overflow-y-scroll">
                    <Steps />
                    {children}
                </main>
            </div>
            {modal ? (
                <Modal isOpen={modal} style={customStyle}>
                    <ModalProduct />
                </Modal>
            ) : null}
        </>
    );
};

export default Layout;
