import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/Authen/SignUp';
import LogIn from './pages/Authen/LogIn';
import ForgetPassword from './pages/Authen/ForgetPassword';
import Profile from './pages/Profile/Account';
import ChangePassword from './pages/Profile/ChangePassword';
import Tour from './pages/Tour/Tour'
import TourDetail from './pages/Tour/TourDetail';
import HomePage from './pages/HomePage/HomePage';
import Page404 from './pages/404/Page404';
import TourItem from './pages/TourItem/TourItem';
import Payment from './pages/Payment/Payment'
import BookTour from './pages/BookTour/BookTour';
import AllTour from './pages/Tour/AllTour';
import Bill from './pages/Bill/Bill';
import Otp from './pages/Authen/Otp'
import CodeSignUp from './pages/Authen/CodeSignUp';
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
           <Route path= "/404" exact component={Page404}/>
          <Route path= "/tour-item" exact component={TourItem}/>
          <Route path= "/payment/:id" exact component={Payment}/>

          <Route path= "/booktour" exact component={BookTour}/>
          <Route path= "/alltour" exact component={AllTour}/>
          <Route path= "/booktour/payment" exact component={Bill}/>
          <Route path= "/otp" exact component={Otp}/>
          <Route path= "/otp-signup" exact component={CodeSignUp}/>



      </Switch>
    </Router>
  );
}

export default App;
