import { Schema, model } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";
import config from "../../config";
import bcrypt from "bcrypt";

const userNameSchema = new Schema<TUserName>(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const guardianSchema = new Schema<TGuardian>(
  {
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccupation: {
      type: String,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const localGuardianSchema = new Schema<TLocalGuardian>(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true,
    },

    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: true,
    },
    profileImg: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Document middlewares

// studentSchema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt));
//   next();
// });

// studentSchema.post("save", function (doc, next) {
//   doc.password = "";
//   next();
// });

// Query middleware

studentSchema.pre("find", function (next) {
  this.select("-password");
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.select("-password");
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  this.pipeline().push({ $project: { password: 0 } });
  next();
});

// This portion of code is for instance methods

// studentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// creation static methods
studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await this.findOne({ id });
  return existingUser;
};

const Student = model<TStudent, StudentModel>("Student", studentSchema);

export default Student;
