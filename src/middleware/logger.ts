import { Request, Response, NextFunction } from "express";

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const startTime = Date.now();

  const timestamp = new Date().toISOString();

  const method = req.method;
  const path = req.path;

  res.on("finish", () => {
    const executionTime = Date.now() - startTime;

    console.log(
      `[${timestamp}] ${method} ${path} - ${executionTime}ms - Status: ${res.statusCode}`
    );
  });

  next();
};