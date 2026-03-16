import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./greencheckmark";
import { FaPlus, FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
        <p className="wd-rounded-corners-all-around wd-border-thin wd-border-black wd-border-solid"
        style={{ display: "inline-block", margin: "0", width: "100px", padding: "2px", fontSize: "12px" }}>
        40% of Total
        </p>
      <FaPlus style={{ marginLeft: "5px", verticalAlign: "middle" }} />
      <IoEllipsisVertical className="fs-4" style={{ marginLeft: "5px", verticalAlign: "middle" }}/>
    </div> );}