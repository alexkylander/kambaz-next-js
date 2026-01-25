export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of">
      </textarea><br/>
      <br />
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
      </table><br/>
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
            <select id="wd-points">
              <option value="1">Assignments</option>
              <option value="2">Quizzes</option>
              <option value="3">Exams</option>
            </select>
          </td>
        </tr>
      </table><br/>
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="wd-points">
              <option value="1">Percentage</option>
              <option value="2">Letter</option>
            </select>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="wd-points">
              <option value="1">Online</option>
              <option value="2">On Paper</option>
            </select>
          </td>
        </tr>
      </table> <br/>
        Online Submission Types:<br/>
        <label style={{ display: "block" }}>
            <input type="radio" name="choice" value="option1"/>
            Text Entry
        </label>
        
        <label style={{ display: "block" }}>
            <input type="radio" name="choice" value="option2"/>
            Website URL
        </label>

        <label style={{ display: "block" }}>
            <input type="radio" name="choice" value="option3"/>
            Media Recordings
        </label>

        <label style={{ display: "block" }}>
            <input type="radio" name="choice" value="option3"/>
            Student Annotations
        </label>

        <label style={{ display: "block" }}>
            <input type="radio" name="choice" value="option3"/>
            File Uploads
        </label> <br/>
      <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Assign To</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={"Everyone"} />
          </td>
        </tr>
      </table> <br/>
      <table>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-from">Available from</label>
            </td>
          <td align="left" valign="top">
            <label htmlFor="wd-to">Until</label>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <input type="date" id="wd-start-date" defaultValue="2024-05-13"/>
            </td>
          <td align="left" valign="top">
            <input type="date" id="wd-end-date" defaultValue="2024-05-20"/>
          </td>
        </tr>
      </table>
      <hr />
      <table width="100%">
        <tr>
          <td align="right" valign="top">
            <button id="wd-cancel"> Cancel </button>
            <button id="wd-save"> Save </button>
           </td>     
        </tr>
      </table>
    </div>
);}
