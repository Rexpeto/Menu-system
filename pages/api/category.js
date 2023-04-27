import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
    const prisma = new PrismaClient();
    const categoryRes = await prisma.category.findMany({
        include: {
            products: true,
        },
    });

    res.status(200).json(categoryRes);
};

export default handler;
