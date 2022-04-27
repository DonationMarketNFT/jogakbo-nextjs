import {GoogleLogout} from "react-google-login";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {isLoginedState, subMenuState} from "../../../atom";

const clientId =
  "991698652827-vu3q9s8470ko9tu9sl342j69rn7ckpl9.apps.googleusercontent.com";

const LogOutBtn = styled.div`
  margin-right: 15px;
  padding: 10px 20px;
  background: #f49a4a;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const GoogleLogOutBtn = () => {
  const [isLogined, setIsLogined] = useRecoilState(isLoginedState);
  const [subMenu, setSubMenu] = useRecoilState(subMenuState);

  const onSuccess = () => {
    setIsLogined(false);
    setSubMenu(false);
    alert("Logout made successfully!");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={props => (
          <LogOutBtn onClick={props.onClick}>로그아웃</LogOutBtn>
        )}
      />
    </div>
  );
};

export default GoogleLogOutBtn;
