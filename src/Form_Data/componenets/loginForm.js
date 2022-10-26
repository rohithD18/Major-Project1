import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [details, setDetails] = useState({
    mobile: "",
    password: "",
    udid: "dummyUniqueDeviceId",
    fcm_token: "fcmTokenTest1",
  });
  const { mobile, password } = details;
  const navigate = useNavigate();
  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    if (mobile === "") {
      alert("Please enter your Username/Mobile!");
    }
    if (password === "") {
      alert("Please enter your Password!");
    }
    if(mobile && password){
      await axios
      .post("https://test.touchapp.in/auth/login", details)
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/home");
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("profile_id", res.data.data.user.userid);
        }
      })
      .catch((err) => alert("Password or Username is Incorrect!"));
        }
    
  };

  const logingHandleChange = (e) => {
    setDetails((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <center>
        <form onSubmit={loginHandleSubmit} name="myForm" className="loginform">
          <h2 id="loginh2">Login to Your Account</h2>
          Username/Mobile:
          <input
            className="form-control"
            type={"text"}
            placeholder="Username/Mobile"
            name="mobile"
            value={mobile}
            onChange={logingHandleChange}
          />
          <br />
          Password:
          <input
            className="form-control"
            type={"password"}
            placeholder="password"
            name="password"
            value={password}
            onChange={logingHandleChange}
          />
          <br />
          <Button type="submit">Login</Button>
        </form>
        <div>
          <p>
            Do not have an account?{" "}
            <Link to="/signup" className="loga">
              Click to SignUp
            </Link>
          </p>
        </div>
      </center>
    </div>
  );
};

export default LoginForm;
