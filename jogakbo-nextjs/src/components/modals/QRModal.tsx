import React from "react";
import {useRecoilState} from "recoil";
import {qrValueState} from "../../../atom";
import QRCode from "qrcode.react";
import styled from "styled-components";

const Container = styled.div``;

const QRModal = () => {
  const [qrValue, setQrValue] = useRecoilState(qrValueState);

  return (
    <>
      {qrValue !== "DEFAULT" ? (
        <Container
          style={{
            backgroundColor: "white",
            width: 300,
            height: 300,
            padding: 20,
          }}
        >
          <QRCode value={qrValue} size={256} style={{margin: "auto"}} />
        </Container>
      ) : null}
    </>
  );
};

export default QRModal;
