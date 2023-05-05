import useSWR from "swr";
import axios from "axios";
import LayoutAdmin from "@/layout/LayoutAdmin";

const Index = () => {
    const fetcher = () => axios("/api/order").then((datos) => datos.data);
    const { data, error, isLoading } = useSWR("/api/order", fetcher);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loader"></span>
                </div>
            ) : (
                <LayoutAdmin title="Cocina">
                    <div>Cocina</div>
                </LayoutAdmin>
            )}
        </>
    );
};

export default Index;
