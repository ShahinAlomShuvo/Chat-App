import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.get("/get-students", StudentController.getStudents);

router.get("/get-student/:id", StudentController.getSingleStudent);

router.get("/get-student-by-id/:id", StudentController.getStudentsById);

router.delete("/delete-student/:id", StudentController.deleteStudent);

export const studentRoute = router;
