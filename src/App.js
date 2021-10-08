import React from 'react';
import Banner from './components/Banner';
import DigitalMenu from './components/DigitalMenu';
import Navbar from './components/Navbar/Navbar';
import InFoBanner from './components/Reasubles/InFoBanner';


function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <InFoBanner text="Does your menu stand out your today's specials? Is it hard for customers to read went they scan the QR code? or update new plates and price?"/>
    <DigitalMenu />
    </>
  );
}

export default App;
