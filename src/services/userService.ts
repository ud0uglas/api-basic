import * as userModel from "../models/user";

export const getUsers = async () => {
    return await userModel.getUsers();
};

export const createUser = async (name: string, email: string) => {
    return await userModel.createUser(name, email);
};