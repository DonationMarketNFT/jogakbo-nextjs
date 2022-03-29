import Head from "next/head";
import {} from "prop-types";

interface ISeo {
  title?: string;
}

export default function Seo({ title = "클레이튼 기반 기부 플랫폼" }: ISeo) {
  return (
    <Head>
      <title>조각보 | {title}</title>
    </Head>
  );
}
