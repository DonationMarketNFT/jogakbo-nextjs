/* eslint-disable import/no-anonymous-default-export */
import {verify} from "jsonwebtoken";

const secret = process.env.SECRET;

export default async function (req, res) {
  const {cookies} = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({message: "Invalid token!"});
  } else {
    const decoded_data = verify(jwt, secret);

    return res.json({address: decoded_data.address});
  }
}
