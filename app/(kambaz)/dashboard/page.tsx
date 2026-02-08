import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
   <div id="wd-dashboard-courses">
    <div className="wd-dashboard-course">
      <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/1234/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/reactjs.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Full Stack software developer</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/2345/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/cpp.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 C++ Programming</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            C++ For Beginners</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/3456/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/nodejs.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Node.js Programming</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Node.js For Beginners</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/4567/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/algo.jpg" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Algorithms</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Suffer</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/5678/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/java.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Java Programming</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Learn Java</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/6789/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/systems.jpg" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 Systems</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Create Computer Systems</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/7890/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/rust.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 IM Rust</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Rust for Intermediates</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      </Row>
    </div>
   </div>
  </div>
);}
