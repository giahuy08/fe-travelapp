import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignUp from './pages/Authen/SignUp';
import LogIn from './pages/Authen/LogIn';
import ForgetPassword from './pages/Authen/ForgetPassword';
function App() {
  return (
    <Router>
      <Switch>
          <Route path= "/" exact component={Home}/>
          <Route path= "/sign-up" exact component={SignUp}/>
          <Route path= "/login" exact component={LogIn}/>
          <Route path= "/forgetpassword" exact component={ForgetPassword}/>
      </Switch>
    </Router>
  );
}

export default App;
