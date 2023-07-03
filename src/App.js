import React from "react";
import { BrowserRouter , Route,  Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login-page/login";
import Signup from "./pages/signup-page/signup";
import { AuthProvider } from "./auth/auth";
import { Profile } from "./pages/profile";
import { SingleScan } from "./pages/SingleScan";
import { FullScanReport } from "./pages/FullScanReport";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App(){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Homepage/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<Signup/>}></Route>
                <Route exact path="/profile" element={<Profile/>}></Route>
                <Route exact path="/singlescan/:type" element={<SingleScan/>}></Route>
                <Route exact path="/fullscanreport" element={<FullScanReport/>}></Route>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </LocalizationProvider>

    );
}
export default App;
