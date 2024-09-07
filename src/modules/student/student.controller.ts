import { NextFunction, Request, Response } from "express";
import { StudentService } from "./student.service";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getSingleStudent(id);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getStudentsById(id);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await StudentService.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getStudents,
  getSingleStudent,
  getStudentsById,
  deleteStudent,
};
