import Card from "./Card";

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {products &&
                products.map((data) => <Card data={data} key={data?.id} />)}
        </div>
    );
};

export default Products;
