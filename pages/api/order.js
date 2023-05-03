import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
    const prisma = new PrismaClient();

    if (req.method === "POST") {
        const order = await prisma.order.create({
            data: {
                name: req.body.client,
                date: req.body.date,
                total: req.body.total,
                products: req.body.shopping,
            },
        });
        res.status(200).json("Exito");

        console.log(order);
    } else {
        console.log("Hola");
    }
};

export default handler;
