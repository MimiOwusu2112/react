import './studentprofile.css';
import logo from './ug.png'; 
function StudentProfile() {
  // Retrieve the student details from your data source or state
  const student = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    studentID: "1234567890",
    year: "2",
    department: "Computer Engineering"
    // Add other details as needed
  };

  return (
    <div className="studentprofile">
     <div className="profile-box">  
      <div className="profile">
        <img src={logo} alt="Logo" className="logo" />
    <div className="student-profile">
    <h1>UNIVERSITY OF GHANA</h1>
      <h1>Student Profile</h1>
      <div>
       <p> <label>Full Name:  </label>
        <span>{student.firstName+" "+student.lastName}</span></p>
      </div>
      <div>
      <p> <label>Email:  </label>
        <span>{student.email}</span></p>
      </div>
      <div>
      <p> <label>Student ID:  </label>
        <span>{student.studentID}</span></p>
      </div>
      <div>
      <p><label>Year:  </label>
        <span>{student.year}</span></p>
      </div>
      <div>
      <p><label>Department:  </label>
        <span>{student.department}</span></p>
      </div>
      {/* Add other details and their corresponding labels */}
      <p><button>Print details</button></p>
            <h5>
              <button>Back to Dashboard</button>
            </h5>
    </div>
    </div>
    </div>
    </div>
  );
}

export default StudentProfile;
