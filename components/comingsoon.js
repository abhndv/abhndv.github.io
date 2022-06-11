import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Container from "../components/container";

export default function ComingSoon() {
  return (
    <div className="">
      <Head>
        <title>Abhinandu V Nair</title>
      </Head>
      <Container>
        <Header />
        <div className="flex mt-36">
          <div className="m-auto">
            <h1 className="text-3xl font-thin">under development</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
