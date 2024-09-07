import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoute } from "./modules/student/student.route";
import { userRoute } from "./modules/user/user.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRoute);
app.use("/api/v1/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Ph-University Application");
});

// not Found Middleware
app.use(notFound);

// global error handler Middleware
app.use(globalErrorHandler);

export default app;
