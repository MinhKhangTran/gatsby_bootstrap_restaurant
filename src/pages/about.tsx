import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const about = () => {
  return (
    <Layout>
      <SEO title="Über Uns" />
      <h1 className="bg-danger text-white">Hi Bootstrap and Gatsby</h1>
      <h1 className="bg-red-100">Hi Bootstrap and Gatsby</h1>
      <p className="bg-red">Hi Bootstrap and Gatsby</p>
    </Layout>
  );
};

export default about;
