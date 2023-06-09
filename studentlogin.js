import './studentlogin.css';
import logo from './ug.png'; 

function App() {
  return (
    <div className="studentlogin">
      <div className="login-box">
        <div className="login">
          <img src={logo} alt="Logo" />
          <h1>UNIVERSITY OF GHANA </h1>
          <h1>SCHOOL OF ENGINEERING SCIENCES</h1>
          <label>STUDENT ID</label>
          <input type="text" name="" required />
          <p>
            <label>STUDENT PIN </label>
            <input type="password" name="" required />
          </p>
          <button>Login</button>
          <p>
            <h5>
            <button>Forgot Password</button>
            </h5>
          </p>
          <p>
            <h5>
            <button>Back to Homepage</button>
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
