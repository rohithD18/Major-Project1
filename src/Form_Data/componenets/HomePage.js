import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const HomePage = () => {
  const [feeds, setFeeds] = useState([]);

  const token = localStorage.getItem("token");
  const URL = "https://test.touchapp.in/api/getFeeds";
  const body = useMemo(
    () => ({
      offset: "0",
    }),
    []
  );
  useEffect(() => {
    axios
      .post(URL, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setFeeds(resp.data.data);
        if (resp.data.status !== 200) {
          alert("Authorization is required!");
        }
      })
      .catch((err) => console.log("error", err));
  });

  const likePost = async (id) => {
    await axios
      .post(
        "https://test.touchapp.in/api/postLike",
        {
          post_id: id,
          reaction_id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="homepage">
      <center>
        <div className="homebuttons">
          <Link className="homea" to="/login">
            Logout
          </Link>
          <h1>TOUCH</h1>
          <Link className="homea" to="/profile">
            {" "}
            Profile
          </Link>
        </div>
        <div>
          {feeds.map((item, index) => {
            const { username, profile_pic, postid, like_count } = item;
            return (
              <div key={index} className="homefeeds">
                <Link className="userlink" to={`/user/${item.user_id}`}>
                  {username}
                </Link>
                <br />
                <img className="post" src={profile_pic} alt="pic" />
                &nbsp;&nbsp;
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={() => likePost(postid)}
                      icon={<Favorite />}
                      checkedIcon={<Favorite></Favorite>}
                    />
                  }
                />{" "}
                {like_count}
                <hr />
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default HomePage;
