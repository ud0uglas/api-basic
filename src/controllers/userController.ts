import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, email} = req.body;
        const newUser = await userService.createUser(name, email);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};