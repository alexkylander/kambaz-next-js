"use client"
import { assignments } from "@/app/(kambaz)/database";
import { useParams } from "next/navigation";
import * as db from "../../../../database";
import { Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import Link from "next/link";
import { addAssignment, editAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useState } from "react";
export default function AssignmentEditor() {
    const { cid } = useParams();
    const modules = db.modules;
    const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
    const dispatch = useDispatch();
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState(0);
    const [assignmentDue, setAssignmentDue] = useState("");
    const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState("");
    const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState("");
  return (
    <>
    {assignments
    .filter((assignment: any) => assignment.course === cid && assignment._id === useParams().aid)
    .map((assignment: any) => (
    <div id="wd-assignments-editor">
      <div>
      <Form>
          <Col className="mb-3" id="formAssignment">
            <FormLabel column sm={2}> Assignment Name </FormLabel>
            <Row sm={10}> <FormControl type="text" defaultValue={assignment.title} onChange={(e) => setAssignmentTitle(e.target.value)} /> </Row>
          </Col>
          <Col className="mb-3" id="infoText">
             <Row sm={10}> <FormControl type="text" defaultValue={assignment.description} onChange={(e) => setAssignmentDescription(e.target.value)} /> </Row>
          </Col>
          <Row className="mb-3" id="points">
            <FormLabel column sm={2}> Points </FormLabel>
            <Col sm={10}> <FormControl type="number" defaultValue={assignment.points} onChange={(e) => setAssignmentPoints(Number(e.target.value))} /> </Col>
          </Row>
          <Row className="mb-3" id="assignmentGroup">
            <FormLabel column sm={2}> Assignment Group </FormLabel>
            <Col sm={10}> <FormSelect defaultValue="ASSIGNMENTS">
                    <option value="assignments">ASSIGNMENTS</option>
                    <option value="quizzes">QUIZZES</option>
                    <option value="exams">EXAMS</option>
              </FormSelect> </Col>
          </Row>
          <Row className="mb-3" id="display">
            <FormLabel column sm={2}> Display Grade as </FormLabel>
            <Col sm={10}> <FormSelect defaultValue="Percentage">
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter</option>
              </FormSelect> </Col>
          </Row>
          <Row className="mb-3" id="display">
            <FormLabel column sm={2}> Submission Type </FormLabel>
            <Col sm={10}> <FormSelect defaultValue="Online">
                    <option value="online">Online</option>
                    <option value="paper">On paper</option>
              </FormSelect> </Col>
          </Row>
          <fieldset>
            <Row className="mb-3">
                <FormLabel as="legend" column sm={2}> Online Entry Options </FormLabel>
                <Col sm={10}>
                  <FormCheck type="checkbox" label="Text Entry" name="onlineEntry" defaultChecked />
                  <FormCheck type="checkbox" label="Website URL" name="onlineEntry" />
                  <FormCheck type="checkbox" label="Media Recordings" name="onlineEntry" />
                  <FormCheck type="checkbox" label="Student Annotation" name="onlineEntry" />
                  <FormCheck type="checkbox" label="File Uploads" name="onlineEntry" />
                </Col>
            </Row>
          </fieldset>
          <Row className="mb-3" id="assign">
            <FormLabel column sm={2}> Assign </FormLabel>
            <Col sm={10}> <FormSelect defaultValue="Everyone">
                    <option value="all">Everyone</option>
                    <option value="paper">On paper</option>
              </FormSelect> </Col>
          </Row>
          <Col>
            <FormLabel>
              <FormLabel><strong>Due</strong></FormLabel>
              <InputGroup>
                <FormControl id="due-calendar" type="date" defaultValue={assignment.due} onChange={(e) => setAssignmentDue(e.target.value)} />
                <span className="input-group-text">
                  <FaCalendar />
                </span>
              </InputGroup>
            </FormLabel>
          </Col>
          <Row className="mb-2">
          <Col>
            <FormLabel>
              <FormLabel><strong>Available From</strong></FormLabel>
              <InputGroup>
                <FormControl id="start-calendar" type="date" defaultValue={assignment.start} onChange={(e) => setAssignmentAvailableFrom(e.target.value)} />
                <span className="input-group-text">
                  <FaCalendar />
                </span>
              </InputGroup>
            </FormLabel>
          </Col>
          <Col>
            <FormLabel>
              <FormLabel><strong>Until</strong></FormLabel>
              <InputGroup>
                <FormControl id="end-calendar" type="date" defaultValue={assignment.due} onChange={(e) => setAssignmentAvailableUntil(e.target.value)} />
                <span className="input-group-text">
                  <FaCalendar />
                </span>
              </InputGroup>
            </FormLabel>
          </Col>
        </Row>
          <Col className="d-flex justify-content-end"> 
          <Button variant="secondary"><Link href={`/courses/${cid}/assignments`}>Cancel</Link></Button> 
          <Button variant="danger" onClick={() => {
      dispatch(editAssignment({ ...assignment, title: assignmentTitle, description: assignmentDescription, points: assignmentPoints, due: assignmentDue, start: assignmentAvailableFrom, end: assignmentAvailableUntil }));
     }}><Link href={`/courses/${cid}/assignments`}>Save</Link></Button></Col>
      </Form>
    </div>
    </div> ))}
    </>
  );
}
