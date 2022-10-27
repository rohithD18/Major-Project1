import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignUpForm = () => {
  const [info, setInfo] = useState({
    full_name: "",
    gender: "",
    mobile: "",
    password: "",
    user_name: "",
    image: "",
    udid: "dummy",
    fcm_token: "dummyToken",
  });
  const { full_name, gender, mobile, password, user_name } = info;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (full_name === "") {
      alert("Please provide you full name!");
    }
    if (user_name === "") {
      alert("Please provide you user name!");
    }
    if (mobile === "") {
      alert("Please provide you mobile number!");
    }
    if (gender === "") {
      alert("Please provide you gender!");
    }
    if (password === "") {
      alert("Please provide you password!");
    }
    await axios
      .post("https://test.touchapp.in/auth/register", info)
      .then((res) => {
        if (res.data.status === 200) {
          navigate("/otpVerification");
        }
        console.log("OTP=>", res.data.data.user.verify_code);
      })
      .catch((err) => console.log("error", err));
  };
  const handleChange = (e) => {
    setInfo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <center>
        <div className="SignUpForm">
          <form onSubmit={handleSubmit} name="myForm">
            <fieldset>
              <h4 style={{ textAlign: "left" }}>Create</h4>
              <h2 style={{ textAlign: "left" }}> Account</h2>
              <label>Full Name: </label>
              <input
                type={"text"}
                name="full_name"
                value={full_name}
                autoComplete="off"
                onChange={handleChange}
              />
              <sup>*</sup>
              <br />
              <br />
              <label>UserName: </label>
              <input
                type={"text"}
                name="user_name"
                value={user_name}
                autoComplete="off"
                onChange={handleChange}
              />
              <sup>*</sup>
              <br />
              <br />
              <label>Mobile: </label>
              <input
                type={"number"}
                name="mobile"
                value={mobile}
                autoComplete="off"
                onChange={handleChange}
              />
              <sup>*</sup>
              <br />
              <br />
              <label>Gender: </label>
              <input
                type={"text"}
                name="gender"
                value={gender}
                autoComplete="off"
                onChange={handleChange}
              />
              <sup>*</sup>
              <br />
              <br />
              <label>Password: </label>
              <input
                type={"password"}
                name="password"
                value={password}
                onChange={handleChange}
              />
              <sup>*</sup>
              <br />
              <br />
              <Button type="submit">Sign up </Button>
            </fieldset>
          </form>
        </div>
        <p>
          Already have an Account?{" "}
          <Link to="/login" className="loga">
            Login{" "}
          </Link>
        </p>
      </center>
    </div>
  );
};

export default SignUpForm;
