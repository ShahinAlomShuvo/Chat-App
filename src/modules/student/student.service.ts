import { TStudent } from "./student.interface";
import Student from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  // This portion is for static methods

  const isUserExist = await Student.isUserExist(studentData.id);
  if (isUserExist) {
    throw new Error("User Already Exist");
  }

  const result = await Student.create(studentData);
  return result;

  // This portion is for instance methods

  //   const student = new Student(studentData);
  //   if (await student.isUserExist(studentData.id)) {
  //     throw new Error("User Already Exist");
  //   }
  //   const result = await student.save();

  //   return result;
};

const getStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  // const result = await Student.aggregate([
  //   {
  //     $match: { id: id },
  //   },
  // ]);
  const result = await Student.findOne({ id: id });
  return result;
};

const getStudentsById = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id: id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudent,
  getStudentsById,
  deleteStudentFromDB,
};
