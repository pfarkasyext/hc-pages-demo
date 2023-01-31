import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";

const Details = (props: any) => {
  const { name, phone } = props;

  return (
    <>
        <div className="text-xl font-semibold">{`About ${name}`}</div>
        <p className="pt-4">Specialty, Subspecialty</p>
        <p className="pt-4">Accepting New Patients?</p>
        <p className="pt-4">Insurances Accepted</p>
    </>
  );
};

export default Details;
