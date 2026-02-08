import Link from "next/link";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
             defaultValue="alice"
             className="mb-2"/>
      <FormControl id="wd-password"
             defaultValue="123" type="password"
             className="mb-2"/>
      <FormControl id="wd-firstname"
             defaultValue="Alice"
             className="mb-2"/>
      <FormControl id="wd-lastname"
             defaultValue="Wonderland"
             className="mb-2"/>
<InputGroup className="mb-2">
  <FormControl
    id="wd-calendar"
    defaultValue="mm/dd/yyyy"
  />
  <span className="input-group-text">
    <FaCalendar />
  </span>
</InputGroup>
      <FormControl id="wd-email"
             defaultValue="alice@wonderland.com"
             className="mb-2"/>
      <FormControl id="wd-role"
             defaultValue="User"
             className="mb-2"/>      
      <Link id="wd-signout-btn"
            href="/account/profile"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link>
    </div> );}
