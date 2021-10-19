import "./App.css";
import { BrowserRouter, Switch, Route,  } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import Login from "./components/login/Login/Login";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/login/Login/privateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
          <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
           <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path={"/details/:Id"}>
            <Details></Details>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
