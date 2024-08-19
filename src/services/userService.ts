import * as userModel from "../models/user";

export const getUsers = async () => {
  return await userModel.getUsers();
};

export const createUser = async (name: string, email: string) => {
  return await userModel.createUser(name, email);
};

export const updateUser = async (id: number, name: string, email: string) => {
  return await userModel.updateUser(id, name, email);
};

export const deleteUser = async (id: number) => {
  await userModel.deleteUser(id);
};
