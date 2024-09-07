import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoute } from "./modules/student/student.route";
import { userRoute } from "./modules/user/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRoute);
app.use("/api/v1/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
