import styled from "styled-components";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useRecoilState, useResetRecoilState} from "recoil";
import {color, media} from "../../styles/theme";
import {
  getBalance,
  testOwnTokenId,
  testTokenId2Description,
  testTokenId2Name,
} from "../api/UseCaver";
import {myAddressState, myBalanceState} from "../../atom";
import {faClone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Seo from "../components/Seo";
import {deleteAccount, getAccount, getUserAddress} from "../api/accountWc";
import {useRouter} from "next/dist/client/router";

const Wrapper = styled.div`
  height: 100%;
  background: ${props => props.theme.bgColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px 0 70px 0;
  width: 935px;
  margin: 0 auto;
  ${media.tablet} {
    width: auto;
    padding: 170px 0 100px 0;
  }
  ${media.mobile} {
    padding: 100px 0 50px 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

interface IProfile {
  bgphoto: string;
}

const ProfileImage = styled.div<IProfile>`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${props => props.bgphoto});
  background-size: cover;
  background-position: center center;
  margin: 10px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${media.tablet} {
    width: 220px;
    height: 220px;
  }
  ${media.mobile} {
    width: 200px;
    height: 200px;
  }
`;

const ProfileInfoBox = styled.div`
  width: 50%;
  margin: 10px;
  ${media.mobile} {
    width: 100%;
    padding: 0 30px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  position: relative;
  margin-top: 20px;
  height: 50px;
  label {
    position: absolute;
    top: -18px;
    left: 5px;
    color: gray;
  }
  input {
    all: unset;
    color: ${props => props.theme.textColor};
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
    width: 100%;
  }
`;

const Withdraw = styled.button`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  background: red;
  padding: 10px 12px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

const NFTContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 15px;
  width: 935px;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 200px;
  h3 {
    position: absolute;
    left: 30px;
    color: ${props => props.theme.textColor};
  }
  ${media.tablet} {
    width: auto;
  }
  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
`;

const NFTBox = styled(motion.div)`
  background: pink;
  background-size: cover;
  background-position: center center;
  height: 200px;
  border-radius: 10px;
  ${media.tablet} {
    height: 150px;
  }
  ${media[768]} {
    height: 130px;
  }
`;

const CopyBox = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const boxVariants = {hover: {scale: 1.05}};

const DEFAULT_IMAGE =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Mypage() {
  const [profile, setProfile] = useState(DEFAULT_IMAGE);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const setDefaultADdress = useResetRecoilState(myAddressState);
  const [myBalance, setMyBalance] = useRecoilState(myBalanceState);
  const copyLinkRef = useRef<any>();
  const [ownToken, setOwnToken] = useState<any[]>([]);
  const [userId, setUserId] = useState(0);
  const router = useRouter();

  // const getOwnTokenIds = async (address: string) => {
  //   const ids = await testOwnTokenId(address);
  //   return ids;
  // };

  // const getOwnTokenInfo = async () => {
  //   if (myAddress !== "0x00") {
  //     let ownTokenArray = [];
  //     const ids = await getOwnTokenIds(myAddress);
  //     for (let id of ids) {
  //       const description = await testTokenId2Description(id);
  //       const name = await testTokenId2Name(id);
  //       ownTokenArray.push([id, name, description]);
  //     }
  //     setOwnToken(ownTokenArray);
  //   }
  // };

  // const getUserData = async () => {
  //   setModalProps({
  //     title: "Klip 지갑을 연동하시겠습니까?",
  //     onConfirm: () => {
  //       KlipAPI.getAddress(setQrvalue, async (address: string) => {
  //         setMyAddress(address);
  //         const _balance = await getBalance(address);
  //         setMyBalance(_balance);
  //       });
  //     },
  //   });
  //   // setConnectWallet(true);
  // };

  // useEffect(() => {
  // getOwnTokenInfo();
  // }, []);

  const deleteUser = () => {
    deleteAccount(userId);
    alert("이용해주셔서 감사합니다");
    setDefaultADdress();
    router.push("/");
  };

  const copyAddress = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    navigator.clipboard.writeText(copyLinkRef.current.value).then(() => {
      alert("주소를 복사했습니다.");
    });
  };

  const getUserData = () => {
    if (myAddress !== "0x00") {
      // const result = await getUserAddress(myAddress, setData);
      getUserAddress(myAddress, async (id: number) => {
        await setUserId(id);
        const balance = await getBalance(myAddress);
        setMyBalance(balance);
      });
    }
  };

  useEffect(() => {
    getUserData();
  }, [myAddress]);

  return (
    <>
      <Seo title="마이페이지" />
      <Wrapper>
        <Container>
          <ProfileContainer>
            <ProfileImage bgphoto={profile} />
            <ProfileInfoBox>
              {myAddress !== "0x00" && (
                <>
                  <ProfileInfo>
                    <label htmlFor="address">Wallet Address</label>
                    <input
                      id="address"
                      readOnly
                      type="text"
                      value={myAddress}
                      ref={copyLinkRef}
                    />
                    <CopyBox onClick={copyAddress}>
                      <FontAwesomeIcon icon={faClone} />
                    </CopyBox>
                  </ProfileInfo>
                  <ProfileInfo>
                    <label htmlFor="balance">Wallet Balance</label>
                    <input
                      id="balance"
                      readOnly
                      type="text"
                      value={`${myBalance} Klay`}
                    />
                  </ProfileInfo>
                </>
              )}
            </ProfileInfoBox>
          </ProfileContainer>
          <NFTContainer>
            <h3>My NFTs</h3>
            {ownToken.map((data, i) => (
              <>
                <NFTBox key={i} variants={boxVariants} whileHover="hover">
                  {data[1]}
                </NFTBox>
              </>
            ))}
          </NFTContainer>
          <Withdraw onClick={deleteUser}>회원 탈퇴</Withdraw>
        </Container>
      </Wrapper>
    </>
  );
}

export default Mypage;
