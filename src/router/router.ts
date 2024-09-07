import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/student",
    route: studentRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;