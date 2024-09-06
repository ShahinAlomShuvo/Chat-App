import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoute } from "./modules/student/student.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
