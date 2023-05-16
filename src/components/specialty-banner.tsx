import * as React from "react";
import { RiHospitalLine, RiStethoscopeLine, RiMedal2Line } from "react-icons/ri";

const SpecialtyBanner = (props: any) => {
  const { name, c_area, c_specialtyDescription, c_pageBannerImage } = props;

  const incentives = [
    {
      name: "Top Facilities",
      imageSrc: <RiHospitalLine className="h-full w-full" />,
      description:
        "Experience the Synergic medical system's state-of-the-art facilities, where cutting-edge technology meets compassionate care, ensuring you receive the best treatment possible.",
    },
    {
      name: "Top Providers",
      imageSrc: <RiStethoscopeLine className="h-full w-full" />,
      description:
        "Discover the Synergic medical system's exceptional network of providers, where healthcare professionals collaborate seamlessly to deliver top-quality care to patients.",
    },
    {
      name: "Top Quality",
      imageSrc: <RiMedal2Line className="h-full w-full" />,
      description:
        "Synergic Medical System stands out for its exceptional quality, ensuring that every aspect of patient care meets the highest standards of excellence.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-16 sm:px-2 sm:py-24 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                {name}
              </h2>
              <p className="text-2xl tracking-tight text-gray-900">
                At Synergic Health
              </p>
              <p className="mt-4 text-gray-500">{c_specialtyDescription}</p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={c_pageBannerImage.image?.url}
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <div className="h-16 w-16">{incentive.imageSrc}</div>
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyBanner;
