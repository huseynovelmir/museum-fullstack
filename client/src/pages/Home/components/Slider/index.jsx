import React from "react";
import museum1 from "./../../../../assets/images/museum1.jpg";
import museum2 from "./../../../../assets/images/museum2.jpg";
import museum3 from "./../../../../assets/images/museum3.jpg";
import museum4 from "./../../../../assets/images/museum4.jpg";
import museum5 from "./../../../../assets/images/museum5.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Slider = () => {
  return (
    <Carousel className={`h-screen`}>
      <div className=" relative h-full w-full">
        <img
          src={museum1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className=" text-center w-2/4 md:w-3/4">
            <Typography
              variant="lead"
              className="mb-4 opacity-80 text-[#EBE9CF] text-xs md:text-2xl lg:text-3xl"
            >
              April 9, 2025 - May 5, 2025
            </Typography>
            <Typography
              variant="h1"
              className="mb-4 text-md md:text-4xl lg:text-6xl  text-[#EBE9CF]"
            >
              Records & Rebels 1966-1970
            </Typography>

            <div className="flex justify-center gap-2 ">
              <Button
                size="lg"
                className="bg-[#EBE9CF] text-black hover:bg-black hover:text-[#EBE9CF] rounded-full px-5 py-2 md:px-10 md:py-3 font-xs md:text-base text-xs leading-none md:leading-tight "
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={museum2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              className="mb-4 opacity-80 text-[#EBE9CF] text-xs md:text-2xl lg:text-3xl"
            >
              June 22, 2023 - July 20, 2024
            </Typography>
            <Typography
              variant="h1"
              className="mb-4 text-md md:text-4xl lg:text-6xl  text-[#EBE9CF]"
            >
              Caravaggio Michelangelo Merisi
            </Typography>

            <div className="flex justify-center gap-2 ">
              <Button
                size="lg"
                className="bg-[#EBE9CF] text-black hover:bg-black hover:text-[#EBE9CF] rounded-full px-5 py-2 md:px-10 md:py-3 font-xs md:text-base text-xs leading-none md:leading-tight "
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative h-full w-full">
        <img
          src={museum3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className=" text-center w-2/4 md:w-3/4">
            <Typography
              variant="lead"
              className="mb-4 opacity-80 text-[#EBE9CF] text-xs md:text-2xl lg:text-3xl"
            >
              May 8, 2025 - May 25, 2025
            </Typography>
            <Typography
              variant="h1"
              className="mb-4 text-md md:text-4xl lg:text-6xl  text-[#EBE9CF]"
            >
              Pieter Bruegel The Elder
            </Typography>

            <div className="flex justify-center gap-2 ">
              <Button
                size="lg"
                className="bg-[#EBE9CF] text-black hover:bg-black hover:text-[#EBE9CF] rounded-full px-5 py-2 md:px-10 md:py-3 font-xs md:text-base text-xs leading-none md:leading-tight "
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative h-full w-full">
        <img
          src={museum4}
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className=" text-center w-2/4 md:w-3/4">
            <Typography
              variant="lead"
              className="mb-4 opacity-80 text-[#EBE9CF] text-xs md:text-2xl lg:text-3xl"
            >
              May 8, 2025 - May 25, 2025
            </Typography>
            <Typography
              variant="h1"
              className="mb-4 text-md md:text-4xl lg:text-6xl  text-[#EBE9CF]"
            >
              Pieter Bruegel The Elder
            </Typography>

            <div className="flex justify-center gap-2 ">
              <Button
                size="lg"
                className="bg-[#EBE9CF] text-black hover:bg-black hover:text-[#EBE9CF] rounded-full px-5 py-2 md:px-10 md:py-3 font-xs md:text-base text-xs leading-none md:leading-tight "
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative h-full w-full">
        <img
          src={museum5}
          alt="image 5"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className=" text-center w-2/4 md:w-3/4">
            <Typography
              variant="lead"
              className="mb-4 opacity-80 text-[#EBE9CF] text-xs md:text-2xl lg:text-3xl"
            >
              May 8, 2025 - May 25, 2025
            </Typography>
            <Typography
              variant="h1"
              className="mb-4 text-md md:text-4xl lg:text-6xl  text-[#EBE9CF]"
            >
              Pieter Bruegel The Elder
            </Typography>

            <div className="flex justify-center gap-2 ">
              <Button
                size="lg"
                className="bg-[#EBE9CF] text-black hover:bg-black hover:text-[#EBE9CF] rounded-full px-5 py-2 md:px-10 md:py-3 font-xs md:text-base text-xs leading-none md:leading-tight "
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
