import * as React from "react";
import Contact from "../components/Contact";
import Corona from "../components/Corona";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Mittag from "../components/Mittag";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Mittag />
      <Menu />
      <Corona />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
