import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./router/router";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ph-University Application");
});

// not Found Middleware
app.use(notFound);

// global error handler Middleware
app.use(globalErrorHandler);

export default app;
