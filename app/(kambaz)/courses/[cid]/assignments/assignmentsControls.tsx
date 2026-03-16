"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./greencheckmark";
import { FaSearch } from "react-icons/fa";
import AssignmentEditor from "./AssignmentEditor";
import { useState } from "react";
export default function AssignmentsControls({ assignmentTitle, setAssignmentTitle, assignmentDescription, setAssignmentDescription, 
  assignmentPoints, setAssignmentPoints, assignmentDue, setAssignmentDue, assignmentAvailableFrom, setAssignmentAvailableFrom, assignmentAvailableUntil, setAssignmentAvailableUntil, addAssignment }:
{ assignmentTitle: string; setAssignmentTitle: (title: string) => void; assignmentDescription: string; setAssignmentDescription: (description: string) => void; 
  assignmentPoints: number; setAssignmentPoints: (points: number) => void; setAssignmentDue: (due: string) => void; assignmentAvailableFrom: string; 
  setAssignmentAvailableFrom: (availableFrom: string) => void; assignmentAvailableUntil: string; setAssignmentAvailableUntil: (availableUntil: string) => void; addAssignment: () => void; assignmentDue: string;  }) {
   const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true); 
 return (
   <div id="wd-modules-controls" className="text-nowrap">
     <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
     <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
            assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle}
            assignmentDescription={assignmentDescription} setAssignmentDescription={setAssignmentDescription}
            assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints}
            assignmentDue={assignmentDue} setAssignmentDue={setAssignmentDue}
            assignmentAvailableFrom={assignmentAvailableFrom} setAssignmentAvailableFrom={setAssignmentAvailableFrom}
            assignmentAvailableUntil={assignmentAvailableUntil} setAssignmentAvailableUntil={setAssignmentAvailableUntil}
            addAssignment={addAssignment} />
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-view-progress">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
     </Button>
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search..." id="wd-search-assignment"/>
   </div>
);}