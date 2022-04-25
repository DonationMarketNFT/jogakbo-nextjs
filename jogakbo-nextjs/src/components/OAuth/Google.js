import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {isLoginedState} from "../../../atom";
import GoogleLogin from "react-google-login";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 15px;
  width: 300px;
  height: 45px;
  background: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

const Logo = styled.img`
  width: 36px;
`;

const Text = styled.h5`
  width: 100%;
  text-align: center;
`;

function Google() {
  const [data, setData] = useState(null);
  const [login, setLogin] = useRecoilState(isLoginedState);

  //   const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=991698652827-vu3q9s8470ko9tu9sl342j69rn7ckpl9.apps.googleusercontent.com&
  // response_type=token&
  // redirect_uri=http://localhost:3003&
  // scope=https://www.googleapis.com/auth/userinfo.email`;
  //   const oAuthHandler = () => {
  //     window.location.assign(oAuthURL);
  //   };

  // useEffect(async () => {
  //   const url = new URL(window.location.href);

  //   const hash = url.hash;
  //   if (hash) {
  //     const accessToken = hash.split("=")[1].split("&")[0];
  //     await axios
  //       .get(
  //         "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
  //           accessToken,
  //         {
  //           headers: {
  //             authorization: `token ${accessToken}`,
  //             accept: "application/json",
  //           },
  //         },
  //       )
  //       .then(data => {
  //         console.log(data);
  //         setData(data);
  //         setLogin(true);
  //       })
  //       .catch(e => console.log("oAuth token expired"));
  //   }
  // }, []);

  // DB에 해당 이메일이 있는지 확인, 없으면 등록 있으면 로그인
  // if (data)
  //   axios
  //     .post("http://localhost:3000/account/create_user", {
  //       email: data.email,
  //       thirdParty: "google",
  //       walletAddress: "",
  //       walletKind: "",
  //       nickName: "",
  //     })
  //     .then(res => console.log("유저등록"))
  //     .catch(e => console.log(e));

  axios
    .get("http://localhost:3000/account/user_all")
    .then(res => console.log(res.data))
    .catch(e => console.log(e));

  return (
    <GoogleLogin
      //clientId={}
      onSuccess={naverUser => console.log(naverUser)}
      onFailure={() => console.error(result)}
      cookiePolicy={"single_host_origin"}
      render={({onClick}) => (
        <Container id="oAuthBtn" onClick={oAuthHandler}>
          <Logo src="oauth/google.svg" />
          <Text>구글 로그인</Text>
        </Container>
      )}
    ></GoogleLogin>
  );
}

export default Google;
