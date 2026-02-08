import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./greencheckmark";
import { FaPlus } from "react-icons/fa";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus />
      <IoEllipsisVertical className="fs-4" />
    </div> );}