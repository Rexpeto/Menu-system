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

        console.log(order);
    }
};

export default handler;
