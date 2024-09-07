import Student from "./student.model";

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
  getStudentsFromDB,
  getSingleStudent,
  getStudentsById,
  deleteStudentFromDB,
};
