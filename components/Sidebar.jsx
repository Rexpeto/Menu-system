import Image from "next/image";
import useStore from "@/hooks/useStore";

const Sidebar = () => {
    const { category, handdlerClickCategory, categoryActual } = useStore();

    return (
        <aside className="md:w-3/12 xl:w-1/14 2xl:w-1/5 bg-gray-800 h-screen flex flex-col gap-4 py-2 overflow-x-hidden">
            <div className="flex items-center gap-4 px-4 border-b border-b-gray-700">
                <Image
                    src="./favicon.svg"
                    width={50}
                    height={50}
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
        </aside>
    );
};

export default Sidebar;
