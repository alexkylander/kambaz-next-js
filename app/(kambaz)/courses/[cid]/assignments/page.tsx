import Link from "next/link";
import { FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./lessoncontrolbuttons";
import ModuleControlButtons from "./modulecontrolbuttons";
import AssignmentsControls from "./assignmentsControls";
import { FaRegEdit } from "react-icons/fa";
export default function Assignments() {
 return (
  <div id="wd-assignments">
    <AssignmentsControls /><br /><br /><br /><br />

    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3"/> ASSIGNMENTS <ModuleControlButtons /> </div>
        <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3" />
            <div className="assignment-text">
            <Link href="/courses/1234/assignments/123"
           className="wd-assignment-link" > A1 
            </Link>  <div className="assignment-subtext">
            <span style={{ color: "red" }}>Multiple Modules</span> | <strong>Not available until</strong> Mar 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
            </div> <div className="ms-auto"><LessonControlButtons /></div> </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3" />
            <div className="assignment-text">
            <Link href="/courses/1234/assignments/123"
           className="wd-assignment-link" > A2 
            </Link>  <div className="assignment-subtext">
            <span style={{ color: "red" }}>Multiple Modules</span> | <strong>Not available until</strong> Mar 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
            </div> <div className="ms-auto"><LessonControlButtons /></div> </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3" />
            <div className="assignment-text">
            <Link href="/courses/1234/assignments/123"
           className="wd-assignment-link" > A3 
            </Link>  <div className="assignment-subtext">
            <span style={{ color: "red" }}>Multiple Modules</span> | <strong>Not available until</strong> Mar 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
            </div> <div className="ms-auto"><LessonControlButtons /></div> </ListGroupItem>
        </ListGroup>
    </ListGroupItem>

    </div>
);}
