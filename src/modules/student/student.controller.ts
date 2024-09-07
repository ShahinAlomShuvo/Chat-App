/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StudentService } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getStudents = catchAsync(async (req, res, next) => {
  const result = await StudentService.getStudentsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students fetched successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentService.getSingleStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student fetched successfully",
    data: result,
  });
});

const getStudentsById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentService.getStudentsById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student fetched successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await StudentService.deleteStudentFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  }
);

export const StudentController = {
  getStudents,
  getSingleStudent,
  getStudentsById,
  deleteStudent,
};
