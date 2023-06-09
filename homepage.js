import './homepage.css';
import logo from './ug.png'; 

function App() {
  return (
    <div className="homepage">
     <div className="home-box">  
      <div className="home">
        <img src={logo} alt="Logo" className="logo" />
        <h1>UNIVERSITY OF GHANA </h1>
          <h1>WELCOME TO SCHOOL OF ENGINEERING SCIENCES</h1>
          <button className="REGISTER">Register</button>
          <p>
          </p>
          <button className="LOGIN">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
