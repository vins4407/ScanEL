import React from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./component/navbar";
import Login from "./pages/login-page/login";
import Signup from "./pages/signup-page/signup";
import { AuthProvider } from "./auth/auth";
import { Profile } from "./component/profile";
import { SingleScan } from "./component/SingleScan";
import FullScan from "./pages/FullScan";
import { OtherPage } from "./pages/demoReport";

function App(){
    return(
        <AuthProvider>
        <Router>
            <Switch>
            <Route exact path="/"><Homepage/></Route>
            <Route exact path="/nav"><Navbar/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/signup"><Signup/></Route>
            <Route exact path="/profile"><Profile/></Route>
            <Route exact path="/singlescan/:type"><SingleScan/></Route>
            <Route exact path="/fullscan"><FullScan/></Route>
            <Route exact path="/otherpage"><OtherPage/></Route>
            </Switch>
        </Router>
        </AuthProvider>

    );
}
export default App;
