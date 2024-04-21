import React from "react";
import { Carousel } from "antd";
import ProductsTab from "../components/ProductsTab";
import { CarouselImg } from "../constants";
import FloatingCartBtn from "../utils/FloatingCartBtn";
const Home = () => {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    opacity: 0.9,
  };
  return (
    <>
      <div>
        <Carousel autoplay style={{ height: "25rem", overflowY: "hidden" }}>
          {CarouselImg.map((img) => (
            <div>
              <img src={img.img} style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      <ProductsTab />
      <FloatingCartBtn />
    </>
  );
};

export default Home;
