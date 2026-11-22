import { Request, Response } from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";

// GET all users
export const getUsers = (req: Request, res: Response): void => {
  const users = getAllUsers();

  res.status(200).json({
    success: true,
    data: users,
  });
};

// GET user by ID
export const getUser = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const user = getUserById(id);

  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

// CREATE user
export const addUser = (req: Request, res: Response): void => {
  const { name, email, age } = req.body;

  if (!name || !email || age === undefined) {
    res.status(400).json({
      success: false,
      message: "Name, email, and age are required",
    });
    return;
  }

  const newUser = createUser(name, email, Number(age));

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
};

// UPDATE user
export const editUser = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const { name, email, age } = req.body;

  if (!name || !email || age === undefined) {
    res.status(400).json({
      success: false,
      message: "Name, email, and age are required",
    });
    return;
  }

  const updatedUser = updateUser(id, name, email, Number(age));

  if (!updatedUser) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: updatedUser,
  });
};

// DELETE user
export const removeUser = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const deleted = deleteUser(id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};