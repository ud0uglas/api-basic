import prisma from "./prisma";

export const getUsers = async () => {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        throw new Error("Falha em buscar usuarios.")
    }
};

export const createUser = async (name: string, email: string) => {
    try {
        return await prisma.user.create({ data: { name, email } });
    } catch (error) {
        throw new Error("Falha ao criar o usuario.")
    }
}