import Head from "next/head";
import TestModals from "../components/Layout/TestModals";
import Tetris from "../components/Tetris";

const  Home = () => {
  return (
    <div>
      <Head>
        <title>Modal In NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <TestModals/>
    </div>
  )
}

export default Home