import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import previous from "../../Assets/previous.png";

const ProfileInfo = () => {
  const [profileData, setProfileData] = useState([]);

  const token = localStorage.getItem("token");
  const profile_id = localStorage.getItem("profile_id");
  let body = useMemo(
    () => ({
      profile_id: profile_id,
    }),
    [profile_id]
  );

  useEffect(() => {
    axios
      .post("https://test.touchapp.in/api/profileInfo", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setProfileData(res.data.message[0].userInfo);
        }
       
      })
      .catch((err) => console.log("error", err));
  });

  return (
    <div className="profileinfo">
      <center>
        <div className="homebtn">
          <Link to="/home">
            <img src={previous} alt="previous" className="backBtn" />
          </Link>
        </div>
        <div>
          {profileData.map((items, index) => {
            const {
              first_name,
              last_name,
              username,
              website,
              profile_pic,
              bio,
            } = items;
            return (
              <div key={index} style={{ textAlign: "left" }}>
                <p style={{ textAlign: "center" }}>{username}</p> <hr />
                <img className="imgprofilepic" src={profile_pic} alt="pic" />
                <hr />
                <p>Firstname: {first_name} </p>
                <hr />
                <p>Lastname: {last_name} </p>
                <hr />
                Website: <p>{website} </p>
                <hr />
                Bio: {bio}
                <hr />
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default ProfileInfo;
