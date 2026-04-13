"use client"
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../details";
import Link from "next/link";
import { findUsersForCourse } from "../../../client";
import { findAllUsers } from "@/app/(kambaz)/account/client";

export default function PeopleTable({ courseId }: { courseId?: string }) {
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
  let data;
  console.log("Course ID:", courseId);
  if (courseId) {
    data = await findUsersForCourse(courseId);
  } else {
    data = await findAllUsers();
  }

  setUsers(data);
  };
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  useEffect(() => {
    fetchUsers();
  }, [courseId]);
  return (
  <div id="wd-people-table">
         {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
<tbody>
  {users
    .map((user: any) => (
      <tr key={user._id}>
        <td className="wd-full-name text-nowrap">
                        <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>
          <span className="wd-last-name">{user.lastName}</span></span>
        </td>
        <td className="wd-login-id">{user.loginId}</td>
        <td className="wd-section">{user.section}</td>
        <td className="wd-role">{user.role}</td>
        <td className="wd-last-activity">{user.lastActivity}</td>
        <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
</tbody>

   </Table>
  </div> );}
  