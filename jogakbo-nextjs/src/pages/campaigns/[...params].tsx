import { useRouter } from "next/dist/client/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();

  return (
    <>
      <Seo title={router.query.params} />
      <h3>detail page{router.query.params}</h3>
    </>
  );
}
