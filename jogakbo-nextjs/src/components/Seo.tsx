import Head from "next/head";
import {} from "prop-types";

interface ISeo {
  title?: any;
}

export default function Seo({ title = "클레이튼 기반 기부 플랫폼" }: ISeo) {
  return (
    <Head>
      <title>조각보 | {title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
