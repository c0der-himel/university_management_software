import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/semesters/',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((mRoute) => router.use(mRoute.path, mRoute.route));

export default router;
