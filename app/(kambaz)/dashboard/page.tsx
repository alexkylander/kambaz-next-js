import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
   <div id="wd-dashboard-courses">
    <div className="wd-dashboard-course">
      <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS101/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/reactjs.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Rocket Propulsion</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work
            </CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS102/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/cpp.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Aerodynamics</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering.</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS103/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/nodejs.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Spacecraft Design</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS104/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/algo.jpg" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Organic Chemistry</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields.</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS105/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/java.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Inorganic Chemistry</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts.</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS106/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/systems.jpg" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Physical Chemistry</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields.</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS107/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/rust.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Ancient Languages and Scripts of Middle-earth</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.</CardText>
          <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
        <Link href="/courses/RS108/home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/rust.png" width="100%" height={160}/>
          <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth</CardTitle>
          <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            This course explores the complex diplomatic relationships between the various species of Middle-earth, including Wizards (Istari), Elves, and Men. Students will examine historical examples of inter-species cooperation and conflict, analyze the political structures and cultural values that shape these interactions, and consider how diplomacy has influenced the development of Middle-earth's history. The course emphasizes critical thinking and comparative analysis in understanding the dynamics of interspecies relations.</CardText>
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
