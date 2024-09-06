import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().optional(),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Main student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: userNameValidationSchema,
  password: z
    .string()
    .min(1, "Password is required")
    .max(15, "Password is too long"),
  gender: z.enum(["Male", "Female", "Other"], "Gender is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Invalid email format"),
  contactNo: z.string().min(1, "Contact number is required"),
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.boolean().default(true),
  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;
