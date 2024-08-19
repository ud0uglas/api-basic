import prisma from "./prisma";

export const getUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error("Falha em buscar usuários.");
  }
};

export const createUser = async (name: string, email: string) => {
  try {
    return await prisma.user.create({ data: { name, email } });
  } catch (error) {
    throw new Error("Falha ao criar o usuário.");
  }
};

export const updateUser = async (id: number, name: string, email: string) => {
  try {
    return await prisma.user.update({
      where: { id },
      data: { name, email },
    });
  } catch (error) {
    throw new Error("Falha ao atualizar o usuário.");
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (error) {
    throw new Error("Falha ao deletar o usuário.");
  }
};
