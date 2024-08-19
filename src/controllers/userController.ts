import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const upsertUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, name, email } = req.body;
    let user;

    if (id) {
      user = await userService.updateUser(Number(id), name, email);
    } else {
      user = await userService.createUser(name, email);
      res.status(201).json(user);
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
