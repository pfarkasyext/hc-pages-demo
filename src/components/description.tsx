import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";
import { render } from "../templates/robots";

type Description = {
  name?: string;
  c_specialtiesPages?: string[];
  acceptingNewPatients?: boolean;
  insuranceAccepted?: string[];
  languages?: string[];
};



const Description = (props: any) => {
  const {
    name,
    c_specialtiesPages,
    acceptingNewPatients,
    insuranceAccepted,
    languages
  } = props;

  let acceptingPatientsLabel;
  if (acceptingNewPatients) {
    acceptingPatientsLabel = <div className="pt-4 font-semibold text-green-950">Accepting New Patients ✓</div>
  } else {
    acceptingPatientsLabel = <div className="pt-4 font-semibold">Not Currently Accepting New Patients</div>
  }

  const insuranceList=insuranceAccepted?.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  const languagesList=languages?.map((item,index)=>{
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
        {acceptingPatientsLabel}
        <div className="pt-4 font-semibold">Insurances Accepted:</div>
        {insuranceList}
        <div className="pt-4 font-semibold">Languages Spoken:</div>
        {languagesList}
    </>
  );
};

export default Description;
