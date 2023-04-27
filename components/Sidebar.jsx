import Image from "next/image";
import Link from "next/link";
import useStore from "@/hooks/useStore";

const Sidebar = () => {
    const { category } = useStore();

    return (
        <aside className="md:w-2/12 xl:w-1/14 2xl:w-1/5 bg-gray-800 h-screen flex flex-col gap-4 py-2 overflow-x-hidden">
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
                        <Link
                            href={item?.name}
                            className="flex items-center hover:bg-gray-600 rounded-lg py-2 gap-7 transition duration-150"
                            key={item?.id}
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
                        </Link>
                    ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
