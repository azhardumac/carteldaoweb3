import React from "react";
import { Link as ScrollLink } from "react-scroll";
import SectionHeading from "../Items/SectionHeading";
import Layout from "../Layout/Layout";
import Layout2 from "../Layout/Layout2";



function Herosection() {
  return (
    // <div className="row -mt-20">
    //   {servicesData.map((service) => (
    //     <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
    //       <Service service={service} />
    //     </div>
    //   ))}
    // </div>
    
    <div className="row -mt-20">
    <div className="service-item text-center col-md-4 col-sm-6 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">market cap</h4>
      <p className="mb-0">$12345</p>
    </div>

    <div className="service-item text-center col-md-4 col-sm-6 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">APY</h4>
      <p className="mb-0">156,751.558%</p>
    </div>

    <div className="service-item text-center col-md-4 col-sm-6 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">Next Rebase</h4>
      <p className="mb-0">Rebasing</p>
    </div>

    <div className="service-item text-center col-md-4 col-sm-6 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">Circulating Supply</h4>
      <p className="mb-0">701,465</p>
    </div>

    <div className="col-md-4 col-sm-6 mt-20">

    </div>
    <div className="service-item text-center col-md-4 col-sm-6 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">Value of Treasury</h4>
      <p className="mb-0">$19</p>
    </div>
    </div>
  );
}

export default Herosection;
