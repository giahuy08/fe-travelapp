import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignUp from './pages/Authen/SignUp';
import LogIn from './pages/Authen/LogIn';
import ForgetPassword from './pages/Authen/ForgetPassword';
import Profile from './pages/Profile/Account';
import ChangePassword from './pages/Profile/ChangePassword';
function App() {
  return (
    <Router>
      <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/sign-up" exact component={SignUp}/>
          <Route path = "/login" exact component={LogIn}/>
          <Route path = "/forgetpassword" exact component={ForgetPassword}/>
          <Route path = "/user/profile" exact component={Profile}/>
          <Route path = "/user/changepassword" exact component={ChangePassword}/>
      </Switch>
    </Router>
  );
}

export default App;
