"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default function CourseNavigation() {
  const pathname = usePathname();
  const links = [
      { label: "Home", path: "/courses/RS101/home", },
      { label: "Modules",   path: "/courses/RS101/modules", },
      { label: "Piazza",  path: "/courses/RS101/piazza", },
      { label: "Zoom",     path: "/courses/RS101/zoom", },
      { label: "Assignments",      path: "/courses/RS101/assignments", },
      { label: "Quizzes",  path: "/courses/RS101/quizzes", },
      { label: "Grades",     path: "/courses/RS101/grades", },
      { label: "People",      path: "/courses/RS101/people/table", },
    ];
  return (
    <ListGroup className="position-fixed top-1 d-none d-md-block z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">
      {links.map((link) => (
        <ListGroupItem key={link.path} as={Link} href={link.path}
          className={`text-danger
            ${pathname.includes(link.label) ? "text-black":"text-red"}`}>
          <br />
          {link.label}
        </ListGroupItem>
      ))}
   </ListGroup>
  );}
