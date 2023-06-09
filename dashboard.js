import './dashboard.css';
import logo from './ug.png'; 

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <img src={logo} alt="Logo" />
        <h1>UNIVERSITY OF GHANA</h1>
        <h1>WELCOME TO SCHOOL OF ENGINEERING SCIENCES</h1>
        
        <p>
        You may access numerous features and information from this page.
        </p>
        <button>View Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
