export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Intro</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creation</li>
              </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP Server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module"> <div className="wd-title">Week 2</div> </li>
        <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Kearn how to create user interfaces</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        <li className="wd-module"> <div className="wd-title">Week 3</div> </li>
        <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to React.js</li>
                <li className="wd-content-item">Create your own web apps</li>
              </ul>
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 3 - Deployment</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 4 - Maintanence</li>
              </ul>
            </li>
          </ul>
      </ul>
    </div>
);}
