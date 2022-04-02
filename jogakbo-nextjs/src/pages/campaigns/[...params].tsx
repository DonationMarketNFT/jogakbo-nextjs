import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Seo from "../../components/Seo";

export default function Detail() {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const index = router.query.params;

  axios(`http://localhost:3000/campaigns/campaign_all`).then((res) =>
    setData(res.data)
  );

  return (
    <>
      <Seo title={router.query.params} />
      {/* <h3>detail page{router.query.params}</h3>
      <p>campaign name: {router.query.params}</p> */}
    </>
  );
}
