import Header from "./header/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
