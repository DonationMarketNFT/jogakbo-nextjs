import axios from "axios";
import { useEffect, useState } from "react";

export default function Campaigns() {
  const [get, setGet] = useState([]);

  const testGet = () => {
    axios("http://localhost:3000/campaigns/campaign_all").then((res) =>
      setGet(res.data)
    );
  };

  useEffect(() => {
    console.log(get);
  }, [get]);

  const testPost = (
    _name: string,
    _description: string,
    _campaignId: number,
    _targetAmount: number,
    _fundingStatus?: boolean,
    _refundStatus?: boolean
  ) => {
    let data = {
      name: _name,
      description: _description,
      campaignId: _campaignId,
      targetAmount: _targetAmount,
      fundingStatus: true,
      refundStatus: false,
    };
    axios
      .post("http://localhost:3000/campaigns/create_campaign", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={() => testGet()}>test GET</button>
      {get && (
        <div>
          {get.map((o: any, i: number) => (
            <h3 key={i}>{o.name}</h3>
          ))}
        </div>
      )}
      <button onClick={() => testPost("sia", "post test", 1, 100)}>
        test POST
      </button>
    </div>
  );
}
