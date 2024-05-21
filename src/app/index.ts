import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

// local imports
import rootRoutes from "./routes";

const app: Application = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// application routes
app.use(rootRoutes);

export default app;
