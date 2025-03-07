import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import LoginPage from "./LoginPage";

function MainLogin() {
    return (<>
    <Routes>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    <h1>HEllo Login Page</h1>
    
    </>  );
}

export default MainLogin;