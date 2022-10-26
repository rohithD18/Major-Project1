import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OtpValid = () => {
  const navigate = useNavigate();
  const [oneTime, setOneTime] = useState("");
  const { otp } = oneTime;
  const otpSubmit = async (e) => {
    e.preventDefault();
    if (oneTime === "") {
      alert("Please enter the OTP!");
      return false;
    }else {
      await axios
      .post("https://test.touchapp.in/auth/verifyOtp", oneTime)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => console.log("error", err));
    }
   
  };

  const otpHandling = (e) =>
    setOneTime((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  return (
    <div className="otpform ">
      <center>
        <h2>Verify with OTP</h2>
        <form onSubmit={otpSubmit} name="myForm">
          <input
            className="otpinput"
            type={"number"}
            defaultValue={otp}
            name="otp"
            onChange={otpHandling}
          />
          <br />
          <div>
            <Button className="btn btn-danger">
              <Link className="otpcancel" to="/signup">
                Cancel
              </Link>
            </Button>
            &nbsp;&nbsp;
            <Button type="submit" className="btn btn-success">
              Submit
            </Button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default OtpValid;
