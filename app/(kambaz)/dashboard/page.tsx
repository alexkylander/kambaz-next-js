import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
 return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
   <div id="wd-dashboard-courses">
    <div className="wd-dashboard-course">
     <Link href="/courses/1234" className="wd-dashboard-course-link">
      <Image src="/images/reactjs.png" width={200} height={150} alt="reactjs" />
      <div>
       <h5> CS1234 React JS </h5>
       <p className="wd-dashboard-course-title">
        Full Stack software developer
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-cpp">
     <Link href="/courses/2345" className="wd-dashboard-course-cpp">
      <Image src="/images/cpp.png" width={200} height={150} alt="cpp" />
      <div>
       <h5> CS2345 C++ Programming </h5>
       <p className="wd-dashboard-course-title">
        C++ for Beginners
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-node_js">
     <Link href="/courses/3456" className="wd-dashboard-course-node_js">
      <Image src="/images/nodejs.png" width={200} height={150} alt="nodejs" />
      <div>
       <h5> CS3456 Node.js Programming </h5>
       <p className="wd-dashboard-course-title">
        Node.js for Beginners
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-algo">
     <Link href="/courses/4567" className="wd-dashboard-course-algo">
      <Image src="/images/algo.jpg" width={200} height={150} alt="algo" />
      <div>
       <h5> CS4567 Algorithms </h5>
       <p className="wd-dashboard-course-title">
        Suffer
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-java">
     <Link href="/courses/5678" className="wd-dashboard-course-java">
      <Image src="/images/java.png" width={200} height={150} alt="java" />
      <div>
       <h5> CS5678 Java Programming </h5>
       <p className="wd-dashboard-course-title">
        Learn Java
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-systems">
     <Link href="/courses/6789" className="wd-dashboard-course-systems">
      <Image src="/images/systems.jpg" width={200} height={150} alt="systems" />
      <div>
       <h5> CS6789 Systems </h5>
       <p className="wd-dashboard-course-title">
        Create Computer Systems
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
    <div className="wd-dashboard-rust">
     <Link href="/courses/7890" className="wd-dashboard-course-rust">
      <Image src="/images/rust.png" width={200} height={150} alt="rust" />
      <div>
       <h5> CS7890 IM Rust </h5>
       <p className="wd-dashboard-course-title">
        Rust for Intermediates
       </p>
       <button> Go </button>
      </div>
     </Link>
    </div>
   </div>
  </div>
);}
