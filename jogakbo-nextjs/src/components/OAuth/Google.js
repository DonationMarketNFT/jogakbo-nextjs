import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Google() {
  const [data, setData] = useState(null);
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=991698652827-vu3q9s8470ko9tu9sl342j69rn7ckpl9.apps.googleusercontent.com&
response_type=token&
redirect_uri=http://localhost:3003&
scope=https://www.googleapis.com/auth/userinfo.email`;
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };

  useEffect(async () => {
    const url = new URL(window.location.href);

    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0];
      await axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((e) => console.log("oAuth token expired"));
    }
  }, []);

  return (
    <img
      id="oAuthBtn"
      onClick={oAuthHandler}
      bgColor="#f8f8f8"
      src="/google.svg"
    />
  );
}

export default Google;
