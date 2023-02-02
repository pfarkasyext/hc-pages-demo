import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Search",
    url: "https://ethically-greasy-crawdad.sbx.pgsdemo.com/landing.html",
  },
];

const Header = (props: any) => {
  const { _site, c_siteLogoUrl } = props;
  
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));
  

  return (
    <div className="bg-gray-50">
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src={c_siteLogoUrl}
              width="150px"
              height="auto"
            ></img>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">
            <div className=" h-12 pt-4 ">
              <Cta
                buttonText="Patient Portal"
                url="#"
                style="text-white bg-blue-600 shadow-xl"
                target="_self"
              ></Cta>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
