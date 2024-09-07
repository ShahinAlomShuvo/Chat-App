import { z } from "zod";

const userValidationSchema = z.object({
  password: z.string().max(15, "Password is too long").optional(),
});

export default userValidationSchema;
