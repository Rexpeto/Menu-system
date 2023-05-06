import useSWR from "swr";
import axios from "axios";
import LayoutAdmin from "@/layout/LayoutAdmin";
import OrderList from "@/components/order/OrderList";

const Index = () => {
    const fetcher = () => axios("/api/order").then((datos) => datos.data);
    const { data, error, isLoading } = useSWR("/api/order", fetcher, {
        refreshInterval: 100,
    });

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loader"></span>
                </div>
            ) : (
                <LayoutAdmin title="Cocina">
                    <h2 className="text-2xl font-bold mb-5">Cocina</h2>
                    <div className="flex flex-col items-center gap-4">
                        {data.map((order) => (
                            <OrderList key={order.id} order={order} />
                        ))}
                    </div>
                </LayoutAdmin>
            )}
        </>
    );
};

export default Index;
