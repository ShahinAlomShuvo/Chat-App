import { Request, Response } from "express";
import { StudentService } from "./student.service";

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getSingleStudent(id);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getStudentsById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getStudentsById(id);
    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentService.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const StudentController = {
  getStudents,
  getSingleStudent,
  getStudentsById,
  deleteStudent,
};
