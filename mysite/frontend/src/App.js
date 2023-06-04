import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Enter from "./components/Enter";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="div">
      <Router>
        < AuthProvider>
          <Route component={Login} path='/' exact/>
          <PrivateRoute component={Enter} path='/enter' exact/>
        </AuthProvider>
      </Router>
    </div>
    
  )
}


export default App;