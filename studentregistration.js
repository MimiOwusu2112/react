import './studentregistration.css';
import logo from './ug.png'; 

function StudentRegistration() {
  return (
    <div className="studentregistration">
      <div className="registration-box">
        <div className="registration">
        <img src={logo} alt="Logo" className="logo" />
          <h1>UNIVERSITY OF GHANA</h1>
          <h1>SCHOOL OF ENGINEERING SCIENCES</h1>
          <p><label>First name:</label></p>
          <p><input type="text" name="first-name" required /></p>
          <p><label>Last name:</label></p>
          <p><input type="text" name="last-name" required /></p>
          <p><label>Email:</label></p>
          <p><input type="email" name="email" required /></p>
          <p><label>Course of Choice:</label></p>
          <p><input type="text" name="course-of-choice" required /></p>
          <p><label>Study Type:</label></p>
          <p><select>
                    <option value="">Select study type</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="postgraduate">postgraduate</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Masters">Masters</option>
        </select></p>
        <p></p>
        <p></p>
        <p><button>Register</button></p>
            <h5>
              <button>Back to Homepage</button>
            </h5>

        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
