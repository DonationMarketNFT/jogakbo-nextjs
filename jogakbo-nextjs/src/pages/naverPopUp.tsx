import React, {useState, useEffect} from "react";

const API = "https://openapi.naver.com/v1/nid/me";

const UserProfile = () => {
  if (typeof window !== "undefined") {
    window.location.href.includes("access_token") && GetUser();
  }
  function GetUser() {
    if (typeof window !== "undefined") {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("token: ", token);
      fetch(`${API}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          // localStorage.setItem("access_token", res.token);
          // setUserData({
          //   nickname: res.nickname,
          //   image: res.image,
          // });
        })
        .catch(err => console.log("err : ", err));
    }
  }
};

const naverPopUp = () => {
  UserProfile();
  return <div></div>;
};

export default naverPopUp;
