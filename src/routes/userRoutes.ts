import { Router } from "express";
import {
  getUsers,
  upsertUser,
  deleteUser,
} from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.post("/users", upsertUser);
router.delete("/users/:id", deleteUser);

export default router;
