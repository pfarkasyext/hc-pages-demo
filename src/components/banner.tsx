import * as React from "react";
import Cta from "./cta";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

export type Headshot = {
  url: string;
};

export type KgPic = {
  url: string;
};

export type Specialty = {
  specialty: string;
  subspecialty: string;
};

type Banner = {
  name?: string;
  headshot?: Headshot;
  address?: Address;
  c_starRating?: string;
  c_numberOfReviews?: string;
  c_specialty?: Specialty;
  c_siteLogo?: KgPic;
  c_45StarsImage?: KgPic;
};

const renderRating = (
  c_starRating?: string,
  c_numberOfReviews?: string,
  starImgUrl?: string
) => {
  //const starImgUrl = "/src/assets/images/4-5-star.png";

  return (
    <>
      <img src={starImgUrl} width="140px" className="mx-auto"></img>
      <div>
        {c_starRating} avg ({c_numberOfReviews} Reviews)
      </div>
    </>
  );
};

const Banner = (props: Banner) => {
  const {
    name,
    headshot,
    address,
    c_starRating,
    c_numberOfReviews,
    c_specialty,
    c_45StarsImage,
  } = props;

  const specialtyStr = c_specialty?.specialty
    ? c_specialty?.specialty + " in "
    : "";

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-80 bg-[url(/src/assets/images/banner-background-1.jpg)] `}
      >
        <div className=" left-0 right-0 flex flex-col items-center ">
          <div className="my-8 rounded-xl bg-blue-600 border-8 shadow-xl border-blue-700 px-4 py-2 flex">
            <div className="w-1/3 m-4">
              <img src={headshot?.url} width="200px" className="mx-auto"></img>
            </div>
            <div className="w-2/3 text-center m-4">
              <div className="align-middle">
                <h1 className="text-white text-3xl font-semibold">{name}</h1>
                <div className="text-lg pt-2 text-white font-semibold">
                  {specialtyStr}
                  {address?.city}, {address?.region}
                </div>
                <div className="text-base pt-2 text-white">
                  {renderRating(
                    c_starRating,
                    c_numberOfReviews,
                    c_45StarsImage?.url
                  )}
                </div>
              </div>
            </div>
            <div className="flex pt-4 justify-between"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
