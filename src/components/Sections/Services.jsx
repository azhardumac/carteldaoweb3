import React from "react";
import Service from "../Items/Service";



function Services() {
  return (
    // <div className="row -mt-20">
    //   {servicesData.map((service) => (
    //     <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
    //       <Service service={service} />
    //     </div>
    //   ))}
    // </div>
    <div className="row -mt-20">
    <div className="service-item text-center col-md-12 col-sm-12 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">Void Swap Value
</h4>
      <p className="mb-0">$ 321.671</p>
    </div>

    <div className="service-item text-center col-md-12 col-sm-12 mt-20">
      {/* <i className={`${icon} icon-simple`}></i> */}
      <h4 className="my-3">Obsidian Price</h4>
      <p className="mb-0">$ 0.065</p>
    </div>
    </div>

   
    

    

   
  );
}

export default Services;
