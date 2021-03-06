import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import AddProduct from './components/AddProduct/AddProduct';
import AllProducts from './components/AllProducts/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Purchese from './components/Purchese/Purchese';
import UserDashboard from './components/UserDashboard/UserDashboard';
import ProfileUser from './components/ProfileUser/ProfileUser';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          {/* -----------Header route---------------- */}
          <Header>
          </Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* -----------Home route---------------- */}
            <Route exact path="/home">
              <Home></Home>
            </Route>

            {/* -----------Explore route---------------- */}
            <Route exact path="/allProducts">
              <AllProducts> </AllProducts>
            </Route>

            {/* -----------Parchese route---------------- */}
            <PrivetRoute exact path="/purchese/:serviceId">
             <Purchese> </Purchese>
            </PrivetRoute>

            {/* -----------My order route---------------- */}
            <PrivetRoute exact path="/myOrders">
              <MyOrders> </MyOrders>
            </PrivetRoute>


            {/* -----------ManageOrders route---------------- */}
            <PrivetRoute exact path="/manageOrders">
             <ManageAllOrders> </ManageAllOrders>
            </PrivetRoute>

            {/* -----------Admin Dashboard route---------------- */}
            <PrivetRoute exact path="/dashboard">
             <Dashboard> </Dashboard>
            </PrivetRoute>

            {/* -----------User Dashboard route---------------- */}
            <PrivetRoute exact path="/userdashboard">
              <UserDashboard></UserDashboard>
            </PrivetRoute>
            {/* -----------Dashboard route---------------- */}
            <PrivetRoute exact path="/adminProfile">
              <Profile> </Profile>
            </PrivetRoute>
            {/* -----------Dashboard route---------------- */}
            <PrivetRoute exact path="/userProfile">
             <ProfileUser></ProfileUser>
            </PrivetRoute>
            {/* -----------Add a product route---------------- */}
            <PrivetRoute exact path="/AddProduct">
             <AddProduct></AddProduct>
            </PrivetRoute>

            {/* -----------Login route---------------- */}
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>

            {/* -----------Register route---------------- */}
            <Route exact path="/register">
             <Register> </Register>
            </Route>


            {/* -----------Unknown or error  route---------------- */}
            <Route path="*">
              <NotFound> </NotFound>
            </Route>

          </Switch>
          {/* -----------Route route---------------- */}
          <Footer></Footer>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
