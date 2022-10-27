import "./App.css";
import HomePage from "./Form_Data/Componenets/HomePage";
import LoginForm from "./Form_Data/Componenets/LoginForm";
import SignUpForm from "./Form_Data/Componenets/Signupform";
import OtpVerification from "./Form_Data/Componenets/OtpValid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileInfo from "./Form_Data/Componenets/ProfileInfo";
import UserProfile from "./Form_Data/Componenets/UserProfile";
import OpeningPage from "./Form_Data/Componenets/OpeningPage";

function App() {
  return (
    <div className="App">
      <center>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<OpeningPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/otpVerification" element={<OtpVerification />} />
              <Route path="/profile" element={<ProfileInfo />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </center>
    </div>
  );
}

export default App;
