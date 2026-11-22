import express from "express";

import userRoutes from "./routes/userRoutes";

import { logger } from "./middleware/logger";
import { requireAPIKey } from "./middleware/requireAPIKey";

const app = express();

// 1. Global observability middleware
app.use(logger);

// 2. Parse incoming JSON bodies
app.use(express.json());

// 3. Protect API endpoints
app.use("/api", requireAPIKey);

// 4. Mount users router
app.use("/api/users", userRoutes);

// 5. Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Observability Express API is running",
  });
});

// 6. Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;