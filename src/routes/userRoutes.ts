import { Router } from "express";

import {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
} from "../controllers/userController";

const router = Router();

// GET all users
router.get("/", getUsers);

// GET user by ID
router.get("/:id", getUser);

// CREATE user
router.post("/", addUser);

// UPDATE user
router.put("/:id", editUser);

// DELETE user
router.delete("/:id", removeUser);

export default router;