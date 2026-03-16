import { Modal, FormControl, Button } from "react-bootstrap";
export default function AssignmentEditor({ show, handleClose, dialogTitle, assignmentTitle, setAssignmentTitle, assignmentDescription, setAssignmentDescription, assignmentPoints, setAssignmentPoints, assignmentDue, setAssignmentDue, assignmentAvailableFrom, setAssignmentAvailableFrom, assignmentAvailableUntil, setAssignmentAvailableUntil, addAssignment, }: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentTitle: string; setAssignmentTitle: (title: string) => void;
 assignmentDescription: string; setAssignmentDescription: (description: string) => void; assignmentPoints: number; setAssignmentPoints: (points: number) => void; assignmentDue: string; setAssignmentDue: (due: string) => void; assignmentAvailableFrom: string; setAssignmentAvailableFrom: (availableFrom: string) => void; assignmentAvailableUntil: string; setAssignmentAvailableUntil: (availableUntil: string) => void; addAssignment: () => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    Title
    <FormControl defaultValue={assignmentTitle}
     onChange={(e) => { setAssignmentTitle(e.target.value); }} />
    Description
    <FormControl defaultValue={assignmentDescription}
     onChange={(e) => { setAssignmentDescription(e.target.value); }} />
    Points
    <FormControl type="number" defaultValue={assignmentPoints}
     onChange={(e) => { setAssignmentPoints(Number(e.target.value)); }} />
    Due Date
    <FormControl type="date" defaultValue={assignmentDue}
     onChange={(e) => { setAssignmentDue(e.target.value); }} />
    Available From
    <FormControl type="date" defaultValue={assignmentAvailableFrom}
     onChange={(e) => { setAssignmentAvailableFrom(e.target.value); }} />
    Available Until
    <FormControl type="date" defaultValue={assignmentAvailableUntil}
     onChange={(e) => { setAssignmentAvailableUntil(e.target.value); }} />
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      addAssignment();
      handleClose();
     }} > Add Assignment </Button>
   </Modal.Footer>
  </Modal>
);}
