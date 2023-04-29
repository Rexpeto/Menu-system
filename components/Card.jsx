import Image from "next/image";

const Card = ({ data }) => {
    const { name, price, image } = data;
    return (
        <div className="grid max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image
                    className="rounded-t-lg"
                    src={`/assets/img/${image}.jpg`}
                    alt=""
                    width={400}
                    height={500}
                />
            </a>
            <div className="flex flex-col py-5 px-2 max-h-full justify-between">
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </a>
                    <p className="mb-3 text-gray-700 dark:text-white font-bold text-2xl">
                        ${price}
                    </p>
                </div>
                <a
                    href="#"
                    className="block items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 outline-none bg-blue-600 dark:hover:bg-blue-700 transition duration-150"
                >
                    Agregar
                </a>
            </div>
        </div>
    );
};

export default Card;
