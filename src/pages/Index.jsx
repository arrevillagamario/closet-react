import React from "react";
import indexImg from "../../public/img/img1.jpg";

const Index = () => {
  return (
    <div className="h-screen dark:bg-black">
      <div className="relative">
        <img src={indexImg} alt="" className="h-screen" />
        <div className="absolute top-1/2 left-72 text-center">
          <h1 className="text-6xl uppercase  font-bold">Todos somos Fashion</h1>
          <p className="text-2xl">Siempre linda siempre closet</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
