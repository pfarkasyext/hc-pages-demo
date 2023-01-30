import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";

const Details = (props: any) => {
  const { address, phone } = props;

  return (
    <>
      <div className="grid">
        <div className="text-xl font-semibold">Contact Info</div>
        <div className="grid grid-cols-2 py-4">
          <div>
            <div>{address.line1}<br />
            {address.city}, {address.region}
            </div>
            <div className="pt-4">
              <a href="#">{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
