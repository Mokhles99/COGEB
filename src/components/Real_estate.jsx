import React from "react";
import { FaHammer, FaTree, FaBath } from "react-icons/fa";
import './icons.css'
const Real_estate = () => {
  const images = [
    "/assets/tayma44.JPG",
  ];

  return (
    <main className="mb-12">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6">
        <a href="https://example.com/sanitaire" target="_blank" rel="noopener noreferrer" className="icon-circle">
        <div className="icon-circle">
            <FaHammer className="icon" />
            <span className="tooltip">Visitez notre filière de vente de matériel de construction</span> 
          </div>
          </a>
          <a href="https://example.com/sanitaire" target="_blank" rel="noopener noreferrer" className="icon-circle">
          <div className="icon-circle">
            <FaTree className="icon" />
            <span className="tooltip">Visitez notre filière de vente de bois</span>
          </div>
          </a>
          <a href="https://example.com/sanitaire" target="_blank" rel="noopener noreferrer" className="icon-circle">
          <div className="icon-circle">
            <FaBath className="icon" />
            <span className="tooltip">Visitez notre filière de vente de matériel sanitaire</span>
          </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Real_estate;
