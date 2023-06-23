import React from "react";
import CategoriesSection from "../Components/CategoriesSection";
import Sidebar from "../Components/SideBar";
import HeaderSection from "../Components/HeaderSection";

export default function Home() {
  return (
    <>
      <HeaderSection/>
      <div className="container d-flex">
      
        <div className="col-md-3">
         
          <Sidebar />
        </div>
        <div className="col-md-9">
          <CategoriesSection />
        </div>
      </div>
    </>
  );
}
