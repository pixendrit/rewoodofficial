import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing5/Hero";
import Categories from "../sections/landing5/Categories";
import Content from "../sections/landing5/Content";
import CTA from "../sections/landing5/CTA";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
           style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Categories />
        <Content />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
