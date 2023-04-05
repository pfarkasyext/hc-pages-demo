import * as React from "react";
import Cta from "./cta";

const ProviderBio = (props: any) => {
  const { description } = props;

  return (
    <>
      <div className="grid">
        <div className="text-xl font-semibold">About Me</div>
        <div className="pt-4">{description}</div>
      </div>
    </>
  );
};

export default ProviderBio;
