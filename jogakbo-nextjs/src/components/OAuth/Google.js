import GoogleLogin from "react-google-login";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {
  isLoginedState,
  loginPlatformState,
  showSignInModalState,
} from "../../../atom";
import {refreshTokenSetup} from "../utils/refreshTokenSetup";
import axios from "axios";

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

const clientId =
  "991698652827-vu3q9s8470ko9tu9sl342j69rn7ckpl9.apps.googleusercontent.com";

const PLATFORM_NAME = "GOOGLE";

const Google = () => {
  const [showSignInModal, setShowSignInModal] =
    useRecoilState(showSignInModalState);
  const [isLogined, setIsLogined] = useRecoilState(isLoginedState);
  const [loginPlatform, setLoginPlatform] = useRecoilState(loginPlatformState);

  async function findEmail(email, nickName, platformName) {
    console.log(email);
    try {
      const response = await axios.get(
        `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account/user/${email}`,
      );
      console.log(response);
      if (response.data === "") {
        createAccount(email, nickName, platformName);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function createAccount(_email, _nickName, _platformName) {
    try {
      const response = await axios.post(
        `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account/create_user`,
        {
          email: toString(_email),
          thirdParty: "GOOGLE",
          walletAddress: "",
          walletKind: "",
          nickName: toString(_nickName),
        },
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const onSuccess = res => {
    refreshTokenSetup(res);
    //access_token
    console.log("[Login Success] res: ", res);
    console.log("[Login Success] currentUser: ", res.profileObj);
    console.log("?????????");
    console.log(res.profileObj.name);
    console.log("email");
    console.log(res.profileObj.email);

    findEmail(res.profileObj.email, res.profileObj.name, PLATFORM_NAME);

    setIsLogined(true);
    setLoginPlatform(PLATFORM_NAME);
    // ????????? ??????
    setShowSignInModal(false);
    // res.profiledObj.googleId ???????????? ?????? id??? ??????
    // ???????????? id ?????? ?????????, id ????????? ????????? ???????????? ?????? ????????????
  };

  const onFailure = res => {
    console.log("[Login Failed] res: ", res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      render={props => (
        <Container onClick={props.onClick} disabled={props.disabled}>
          <Logo src="oauth/google.svg" />
          <Text>?????? ?????????</Text>
        </Container>
      )}
    />
  );
};

export default Google;
