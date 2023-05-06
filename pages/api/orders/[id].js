import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
    const prisma = new PrismaClient();

    if (req.method === "POST") {
        const { id } = req.query;

        const orderUpdate = await prisma.order.update({
            where: {
                id: parseInt(id),
            },
            data: {
                status: true,
            },
        });

        res.status(200).json(orderUpdate);
    }
};

export default handler;
