"use client"
import { useState, useEffect } from "react";
import * as client from "../../client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } from "./reducer";
import { v4 as uuidv4 } from "uuid";
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
    const { modules } = useSelector((state: RootState) => state.modulesReducer);
    const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
    const dispatch = useDispatch();
    const onCreateAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = { title: assignmentTitle, course: cid };
        const assignment = await client.onCreateAssignmentForCourse(cid as string, newAssignment);
        dispatch(addAssignment([...assignments, assignment]));

        setAssignmentTitle("");
    };
    const fetchAssignments = async () => {
        if (!cid) return;
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const onUpdateAssignment = async (assignment: any) => {
        await client.updateAssignment(assignment);
        const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a );
        dispatch(setAssignments(newAssignments));
    };
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState(0);
    const [assignmentDue, setAssignmentDue] = useState("");
    const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState("");
    const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState("");
 return (
  <div id="wd-assignments">
    <AssignmentsControls assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle} 
    assignmentDescription={assignmentDescription} setAssignmentDescription={setAssignmentDescription} 
    assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints} 
    assignmentDue={assignmentDue} setAssignmentDue={setAssignmentDue} 
    assignmentAvailableFrom={assignmentAvailableFrom} setAssignmentAvailableFrom={setAssignmentAvailableFrom} 
    assignmentAvailableUntil={assignmentAvailableUntil} setAssignmentAvailableUntil={setAssignmentAvailableUntil}
    addAssignment={() => {
      onCreateAssignmentForCourse();
        setAssignmentTitle("");
    }}
    /><br /><br /><br /><br />
        <div>
            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> <FaRegEdit className="me-2 fs-3"/> ASSIGNMENTS <ModuleControlButtons  /> </div>
      <ListGroup className="rounded-0">
    {assignments
    .map((assignment: any) => (
      <ListGroupItem key={assignment._id} className="wd-module p-3 mb-3 fs-5 border-gray">
    <div className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />  {
        assignment.editing && (
            <FormControl
                type="text"
                value={assignment.title}
                onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                       onUpdateAssignment(assignment);
                    }
                }}
                defaultValue={assignment.title}
            />
        )}
        <FaRegEdit className="me-2 fs-3" /> 
        <Link 
        href={`/courses/${cid}/assignments/${assignment._id}`} 
        className="wd-assignment-link"
        >
        {assignment.title}
        </Link>
    </div>
    <LessonControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => {
                        removeAssignment(assignmentId);
                      }}
                      editAssignment={(assignmentId) => onUpdateAssignment(assignmentId)} /> </div>
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
