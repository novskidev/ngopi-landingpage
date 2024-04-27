import ProductCard from "./ProductCard";
import {
  productimg1,
  productimg2,
  productimg3,
  productimg4,
} from "../image/picture/index.js";

import { eclipse1, eclipse2 } from "../image/picture/index.js";

import { intersect } from "../image/picture/index.js";

function Product() {
  return (
    <section className="flex flex-col items-center w-full p-8 mt-0 gap-10">
      <div className="text-center">
        <h3 className="text-2xl text-black font-extralight opacity-56">
          Our Product
        </h3>
        <h2 className="text-4xl">From Top Quality Material</h2>
      </div>

      <div className="flex flex-col justify-start items-center gap-6 w-full max-w-[556px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-full bg-bright-gray">
          <div className="flex justify-center items-center p-2 rounded-full bg-bright-gray">
            <div className="flex justify-center items-center rounded-full w-full h-[61px] gap-2.5 px-4 py-5 bg-white">
              <p className="text-black text-2xl font-normal">Latte</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 rounded-full bg-bright-gray">
            <div className="flex justify-center items-center rounded-full w-full h-[61px] gap-2.5 px-4 py-10">
              <p className="text-black text-2xl font-normal">Robusta</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 rounded-full bg-bright-gray">
            <div className="flex justify-center items-center rounded-full w-full h-[61px] gap-2.5 px-4 py-10">
              <p className="text-black text-2xl font-normal">Arabica</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <ProductCard
          picture={productimg1}
          title={"Chocolatte Latte"}
          rating={4.6}
          review={360}
          description={
            "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla"
          }
          price={"$2.9"}
        />
        <ProductCard
          picture={productimg2}
          title={"Mocca Latte"}
          rating={5.0}
          review={180}
          description={
            "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla"
          }
          price={"$2.7"}
        />
        <ProductCard
          picture={productimg3}
          title={"Coffe Latte"}
          rating={4.8}
          review={350}
          description={
            "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla"
          }
          price={"$2.9"}
        />
        <ProductCard
          picture={productimg4}
          title={"Hazelnut Latte"}
          rating={4.9}
          review={390}
          description={
            "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla"
          }
          price={"$2.8"}
        />
      </div>
      <div className="flex gap-2">
        <img src={eclipse1} alt="" />
        <img src={eclipse2} alt="" />
        <img src={eclipse2} alt="" />
      </div>
      <img src={intersect} alt="" />
    </section>
  );
}

export default Product;
