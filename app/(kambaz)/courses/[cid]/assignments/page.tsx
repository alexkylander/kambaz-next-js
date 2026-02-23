"use client"
import Link from "next/link";
import { FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./lessoncontrolbuttons";
import ModuleControlButtons from "./modulecontrolbuttons";
import AssignmentsControls from "./assignmentsControls";
import { FaRegEdit } from "react-icons/fa";
import { assignments } from "@/app/(kambaz)/database";
import { useParams } from "next/navigation";
import * as db from "../../../database";
export default function Assignments() {
    const { cid } = useParams();
    const modules = db.modules;
 return (
  <div id="wd-assignments">
    <AssignmentsControls /><br /><br /><br /><br />
        <div>
            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3"/> ASSIGNMENTS <ModuleControlButtons /> </div>
      <ListGroup className="rounded-0">
    {assignments
    .filter((assignment: any) => assignment.course === cid)
    .map((assignment: any) => (
      <ListGroupItem key={assignment._id} className="wd-module p-3 mb-3 fs-5 border-gray">
    <div className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" /> 
        <FaRegEdit className="me-2 fs-3" /> 
        <Link 
        href={`/courses/${cid}/assignments/${assignment._id}`} 
        className="wd-assignment-link"
        >
        {assignment.title}
        </Link>
    </div>
    <LessonControlButtons />
    </div>
    <div className="assignment-subtext">
        <span style={{ color: "red" }}>Multiple Modules</span> | 
        <strong>Not available until</strong> {assignment.start} | 
        <strong>Due</strong> {assignment.due} | {assignment.points} pts
    </div>
          </ListGroupItem>
        ))}
    </ListGroup>
        </div>
    </div>
);}
