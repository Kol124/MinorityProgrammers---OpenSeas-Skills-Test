// import React from "react";
import { Layout } from "../common";
import { TopCollections } from "../common";
import { Collectibles } from "../common";

export function Home() {
  return (
    <Layout>
      <TopCollections />
      <Collectibles />
    </Layout>
  );
}

export default Home;
