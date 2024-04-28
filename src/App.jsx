import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import TiltCards from "./components/TiltCards.jsx";
import MainGrid from "./components/MainGrid.jsx";

import Electronics from "./components/Categories/Electronics.jsx";
import Jewelery from "./components/Categories/Jewelery.jsx";
import MensClothing from "./components/Categories/MensClothing.jsx";
import WomensClothing from "./components/Categories/WomensClothing.jsx";
import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      
      <Background>
        <Hero />,
        <MainGrid />,
        <div id="men's clothing">
        <MensClothing />
      </div>
      <div id="women's clothing">
        <WomensClothing />
      </div>
      <div id="electronics">
        <Electronics />
      </div>
      <div id="jewelery">
        <Jewelery />
      </div>

      <TiltCards />,

      {/* <Footer/> */}


      </Background>
      
      
      
      {/* 

       */}
    </>
  );
}

// import React, { useState, useEffect } from 'react';
// import ProductCard from './components/ProductCard.jsx';
// import { Background } from './components/Background.jsx';

// const App = () => {

//   return (

//     <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
//       <div className="grid grid-cols-3 gap-8 ">
//         {products.map(product => (
//           <ProductCard
//             key={product.id}
//             imageUrl={product.image}
//             productName={product.title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
