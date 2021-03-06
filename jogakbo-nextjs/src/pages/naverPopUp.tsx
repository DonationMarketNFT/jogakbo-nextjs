import React, {useState, useEffect} from "react";
import axios from "axios";

const API =
  "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/nid/me";

const UserProfile = () => {
  if (typeof window !== "undefined") {
    window.location.href.includes("access_token") && GetUser();
  }
  function GetUser() {
    if (typeof window !== "undefined") {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      const state = window.location.href.split("=")[2].split("&")[0];
      console.log("token: ", token);
      console.log("state: ", state);

      fetch(`${API}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log("로그인성공", res);
          console.log("닉네임");
          console.log(res.response.nickname);
          console.log("email");
          console.log(res.response.email);

          findEmail(res.response.email);
        })
        .catch(err => console.log("err : ", err));
    }
  }

  async function findEmail(email: string) {
    console.log(email);
    try {
      const response = await axios.get(
        `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account/user/${email}`,
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
};

const naverPopUp = () => {
  UserProfile();
  return <div></div>;
};

export default naverPopUp;
