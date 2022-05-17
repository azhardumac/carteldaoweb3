import React, { useEffect } from "react";
import Layout2 from "../components/Layout/Layout2";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import ServicesSection from "../components/Sections/Services";

function Multipage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout2>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Dashboard" />

      <Herosection />
      </section>
    </Layout2>
  );
}

export default Multipage;
