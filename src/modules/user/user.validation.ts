import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  needPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["admin", "faculty", "student"], { message: "Invalid role" }),
  status: z.enum(["in-progress", "blocked"]).optional().default("in-progress"),
  isActive: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
});

export default userValidationSchema;
