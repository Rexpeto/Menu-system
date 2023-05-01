import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";

const steps = [
    { step: 1, name: "Menú", url: "/" },
    { step: 2, name: "Ordenes", url: "/ordenes" },
    { step: 3, name: "Total", url: "/total" },
];

const Steps = () => {
    const router = useRouter();
    const { handdlerChangeStep, step } = useStore();

    const progressBar = () => {
        return parseInt((step / 3) * 100);
    };

    return (
        <>
            <div className="flex justify-between mb-5">
                {steps.map((link) => (
                    <button
                        onClick={() => {
                            router.push(link.url);
                            handdlerChangeStep(link.step);
                        }}
                        key={link.step}
                        className={`rounded-lg border px-2 py-1 border-gray-400 hover:border-blue-500 transition duration-150 ${
                            router.pathname === link.url
                                ? "border-blue-500"
                                : ""
                        }`}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
            <div className="bg-gray-600 rounded-full mb-5 transition-all duration-500">
                <div
                    className="h-2 bg-blue-700 rounded-full transition-all duration-500"
                    style={{ width: `${progressBar()}%` }}
                ></div>
            </div>
        </>
    );
};

export default Steps;
