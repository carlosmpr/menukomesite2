import React from "react";
import Banner from "./components/Banner";
import DigitalMenu from "./components/DigitalMenu";
import Navbar from "./components/Navbar/Navbar";
import InFoBanner from "./components/Reasubles/InFoBanner";
import SideInfo from "./components/Reasubles/SideInfo";
import Iphone from "./assets/icons/full.svg";
import CenterInfo from "./components/CenterInfo";
import Features from "./components/Features/Features";
import Data from "./components/Data";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <InFoBanner text="Does your menu stand out your today's specials? Is it hard for customers to read went they scan the QR code? or update new plates and price?" />
      <DigitalMenu />
      <SideInfo
        text="With Menukome, you can transform your menu into a mobile application, and you can highlight your products. It is easy to use and update, and you can increase your sales by showing recommendations to your customers."
        image={Iphone}
      />
      <SideInfo
        text="Easy to use
A quick scan of the QR code and your customers will get your menu instantly."
        image={Iphone}
        reverse={"flex-row-reverse"}
      />

      <SideInfo
        text="More Appealing
        Using photos that stand up your dishes allows your customers to appreciate better and make an ordering decision."
        image={Iphone}
      />
      <CenterInfo />
      <Features />
      <Data />
      <Contact />
    </>
  );
}

export default App;
