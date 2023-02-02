import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";
import { render } from "../templates/robots";

type Description = {
  name?: string;
  c_specialtiesPages?: string[];
  acceptingNewPatients?: boolean;
  insuranceAccepted?: string[];
};

const Description = (props: any) => {
  const {
    name,
    c_specialtiesPages,
    acceptingNewPatients,
    insuranceAccepted
  } = props;

  const renderAcceptingNewPatients = acceptingNewPatients ? "Accepting New Patients" : "Not Currently Accepting New Patients";

  const insuranceList=insuranceAccepted?.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  const specialtiesList=c_specialtiesPages?.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  return (
    <>
        <div className="text-xl font-semibold">{`About ${name}`}</div>
        <br />
        <div className="pt-4 font-semibold">Specialties:</div>
        {specialtiesList}
        <div className="pt-4 font-semibold">{renderAcceptingNewPatients}</div>
        {acceptingNewPatients}
        <div className="pt-4 font-semibold">Insurances Accepted:</div>
        {insuranceList}
    </>
  );
};

export default Description;
