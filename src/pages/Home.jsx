import React from "react";
import CategoriesSection from "../Components/CategoriesSection";
import Sidebar from "../Components/SideBar";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
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
