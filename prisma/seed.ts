import { PrismaClient } from "@prisma/client";
import { categorySeed } from "./data/category";
import { productsSeed } from "./data/products";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
    try {
        await prisma.category.createMany({
            data: categorySeed,
        });

        await prisma.product.createMany({
            data: productsSeed,
        });
    } catch (error) {
        console.log(error);
    }
};

main();

export default main;
