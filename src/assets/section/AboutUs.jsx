import Button from "../component/Button";

function AboutUs() {
  return (
    <section className="w-full h-fit flex flex-col p-8 gap-10">
      <div className="text-center">
        <h3 className="text-2xl text-black font-extralight opacity-56">
          About Us
        </h3>
        <h2 className="text-4xl">Why We Are The Best</h2>
      </div>
      <div className=" flex justify-center w-full h-fit gap-10">
        <div className="flex flex-col w-[600px] h-16 gap-10">
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
