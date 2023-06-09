import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './studentprofile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import studentlogin from './studentlogin';
// import dashboard from './dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={studentlogin} />
//           <Route path="/dashboard" component={dashboard} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

