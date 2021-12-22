import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ItemMain from "../components/MainPageComponent/ItemMain";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Main({isLogin, userinfo}) {
  
  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo}/>
      <Banner />
      <ItemMain />
      <Footer />
    </div>
  );
}