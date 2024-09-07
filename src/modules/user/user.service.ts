import config from "../../config";
import { TStudent } from "../student/student.interface";
import Student from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //   const isUserExist = await Student.isUserExist(studentData.id);
  //   if (isUserExist) {
  //     throw new Error("User Already Exist");
  //   }

  //   create a object for create user
  const userData: Partial<TUser> = {};

  //   set password
  userData.password = password || (config.default_password as string);

  //   set role
  userData.role = "student";

  //   set id
  userData.id = "203010001";

  //   create user
  const newUser = await User.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
