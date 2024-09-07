import { NextFunction, Request, Response } from "express";
import studentValidationSchema from "../student/student.validation";
import { UserService } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    // const validationData = studentValidationSchema.parse(student);

    const result = await UserService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
