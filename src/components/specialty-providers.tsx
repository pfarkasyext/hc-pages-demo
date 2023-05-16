import * as React from "react";

const SpecialtyProviders = (props: any) => {
  const { name, c_treatedBy } = props;

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 sm:px-2 sm:py-24 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="text-2xl tracking-tight text-gray-900">Providers who specialize in {name}:</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyProviders;
