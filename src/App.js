import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/Authen/SignUp';
import LogIn from './pages/Authen/LogIn';
import ForgetPassword from './pages/Authen/ForgetPassword';
import Profile from './pages/Profile/Account';
import ChangePassword from './pages/Profile/ChangePassword';
import Tour from './pages/Tour/Tour'
import TourDetail from './pages/Tour/TourDetail';
import Booking from './pages/Booking/Booking';
import HomePage from './pages/HomePage/HomePage';
import Page404 from './pages/404/Page404';
import TourItem from './pages/TourItem/TourItem';
import BookTour from './pages/BookTour/BookTour';
function App() {
  return (
    <Router>
      <Switch>
          <Route path = "/" exact component={HomePage}/>
          <Route path = "/sign-up" exact component={SignUp}/>
          <Route path = "/login" exact component={LogIn}/>
          <Route path = "/forgetpassword" exact component={ForgetPassword}/>
          <Route path = "/user/profile" exact component={Profile}/>
          <Route path = "/user/changepassword" exact component={ChangePassword}/>
          <Route path= "/tour" exact component={Tour}/>
          <Route path= "/tourdetail" exact component={TourDetail}/>
          <Route path= "/booking" exact component={Booking}/>
          <Route path= "/404" exact component={Page404}/>
          <Route path= "/tour-item" exact component={TourItem}/>
          <Route path= "/booktour" exact component={BookTour}/>

      </Switch>
    </Router>
  );
}

export default App;
