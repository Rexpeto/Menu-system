import Image from "next/image";
import useStore from "@/hooks/useStore";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {
    const { category, handdlerClickCategory, categoryActual } = useStore();
    const [abs, setAbs] = useState(false);

    return (
        <aside
            className={`${
                abs ? "w-[3rem]" : "w-[25rem]"
            } bg-gray-800 h-screen flex flex-col justify-between gap-4 py-2 overflow-x-hidden transition-all duration-150`}
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 px-4 py-2 border-b border-b-gray-700">
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
                <nav className="flex flex-col w-full gap-4 px-2">
                    {category &&
                        category.map((item) => (
                            <button
                                type="button"
                                className={`flex items-center ${
                                    categoryActual?.id === item?.id
                                        ? "bg-gray-600"
                                        : ""
                                } hover:bg-gray-600 rounded-lg py-2 gap-7 transition duration-150`}
                                key={item?.id}
                                onClick={() => handdlerClickCategory(item?.id)}
                            >
                                <Image
                                    src={`./assets/img/${item?.icon}.svg`}
                                    className="dark:invert"
                                    alt={item?.name}
                                    width={30}
                                    height={30}
                                    title={item?.name}
                                />
                                {item?.name}
                            </button>
                        ))}
                </nav>
            </div>
            <button
                className="flex justify-end hover:bg-gray-600 rounded-lg outline-none text-2xl py-2 gap-7 transition duration-150 px-2"
                onClick={() => setAbs(!abs)}
            >
                {abs ? <BsArrowBarRight /> : <BsArrowBarLeft />}
            </button>
        </aside>
    );
};

export default Sidebar;
