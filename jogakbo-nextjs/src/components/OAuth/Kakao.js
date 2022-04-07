import Link from "next/link";

const Kakao = () => {
  const REST_API_KEY = "3779b449cc7b789723c3c7512bb0bc88";
  const REDIRECT_URI = "http://localhost:3003/mypage";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Link href={KAKAO_AUTH_URL}>
      <a>
        <img src="/kakao.svg" />
      </a>
    </Link>
  );
};

export default Kakao;
