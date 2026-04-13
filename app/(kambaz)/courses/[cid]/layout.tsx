"use client";
import { ReactNode } from "react";
import CourseNavigation from "./navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../database";
import Breadcrumb from "./breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  const cid = params?.cid;
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course) => course._id === cid);
 return (
<div id="wd-courses">
  <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course?.name}
      <Breadcrumb course={course} /> </h2> <hr />
  <div className="d-flex">
  <div className="d-none d-md-block col-md-3">
    <CourseNavigation />
  </div>
  <div className="flex-fill">
    {children}
  </div>
</div>
</div>


);}
