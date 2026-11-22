import { User } from "../types/user";

let users: User[] = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Mona",
    email: "mona@example.com",
    age: 22,
  },
];

let nextId = 3;

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const createUser = (
  name: string,
  email: string,
  age: number
): User => {
  const newUser: User = {
    id: nextId++,
    name,
    email,
    age,
  };

  users.push(newUser);

  return newUser;
};

export const updateUser = (
  id: number,
  name: string,
  email: string,
  age: number
): User | undefined => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return undefined;
  }

  user.name = name;
  user.email = email;
  user.age = age;

  return user;
};

export const deleteUser = (id: number): boolean => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return false;
  }

  users.splice(userIndex, 1);

  return true;
};