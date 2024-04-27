import Button from "./Button";
import { HeroImage } from "../const";
import { intersect } from "../image/picture";
import { intersect2 } from "../image/picture";

function Hero() {
  return (
    <div className="p-8 z-10 w-full">
      <section className="flex flex-col justify-center items-center">
        <h1 className="p-3 m-3 font-medium text-6xl text-center">
          Enjoy Your Favorite <br></br>
          Coffee with Ngopi
        </h1>
        <p className="p-2 m-3 font-normal text-center">
          Discover tranquility at Ngopi a sanctuary for unwinding,<br></br>
          where your evenings are perfected with relaxation and rich flavors.
        </p>
       <Button>waba laba dub dub motherfucker</Button> 

        <div className="flex flex-wrap gap-5 p-8 ">
          {HeroImage.map((item, index) => {
            return (
              <img
                width={200}
                height={348}
                key={index}
                src={item.imageURL}
                alt={item.imageALT}
              />
            );
          })}
        </div>
        <div>
          <img src={intersect} alt="pembatas" />
        </div>
        <section className="flex flex-wrap h-70 gap-10 p-20 items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-normal text-6xl">30+</h3>
            <h5 className=" font-normal text-2xl">Coffe Variant</h5>
          </div>
          <img src={intersect2} alt="pembatas1" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-normal text-6xl">20+</h3>
            <h5 className=" font-normal text-2xl">Meeting Room</h5>
          </div>
          <img src={intersect2} alt="pembatas1" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-normal  text-6xl">25+</h3>
            <h5 className=" font-normal text-2xl">Event Space</h5>
          </div>
          <img src={intersect2} alt="pembatas1" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-normal  text-6xl">40+</h3>
            <h5 className=" font-normal text-2xl">Global Achievement</h5>
          </div>
        </section>
        <img src={intersect} alt="pembatasatas" />
      </section>
    </div>
  );
}

export default Hero;
