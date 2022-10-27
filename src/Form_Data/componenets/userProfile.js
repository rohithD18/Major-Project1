import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import previous from "../../Assets/previous.png";

const UserInfo = () => {
  let { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    profile_pic: "",
    website: "",
    bio: "",
  });

  const { first_name, last_name, username, profile_pic, website, bio } = user;

  const token = localStorage.getItem("token");
  let body = useMemo(
    () => ({
      profile_id: id,
    }),
    [id]
  );

  useEffect(() => {
    axios
      .post("https://test.touchapp.in/api/profileInfo", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status !== 200) {
          alert("Authorization required!");
        }
        setUser({
          first_name: res.data.message[0].userInfo[0].first_name,
          last_name: res.data.message[0].userInfo[0].last_name,
          username: res.data.message[0].userInfo[0].username,
          profile_pic: res.data.message[0].userInfo[0].profile_pic,
          website: res.data.message[0].userInfo[0].website,
          bio: res.data.message[0].userInfo[0].bio,
        });
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
        <div className="userdata">
          <center>
            {" "}
            <p> {username} </p>
            <hr />
          </center>
          <img
            src={profile_pic}
            height="100px"
            alt="pic"
            className="imgprofilepic"
          />{" "}
          <hr />
          <p>Frstname: {first_name} </p>
          <hr />
          <p>lastname: {last_name} </p>
          <hr />
          <p> Website: {website} </p>
          <hr />
          <p>Bio: {bio}</p>
          <hr />
        </div>
      </center>
    </div>
  );
};

export default UserInfo;
