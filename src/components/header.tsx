import * as React from "react";
import Cta from "../components/cta";
import SearchHeader from "./search-header";
import {
  provideHeadless,
  SearchHeadlessProvider,
  SandboxEndpoints,
} from "@yext/search-headless-react";

type Link = {
  label: string;
  url: string;
};

const apiKey = "7e586e5de90ad8889acbabca5bc57f32";
const experienceKey = "find-a-doctor";
const experienceVersion = "PRODUCTION";
const locale = "en";

const searcher = provideHeadless({
  apiKey: apiKey,
  experienceKey: experienceKey,
  //verticalKey: "Your Vertical Key",
  locale: "en",
  endpoints: SandboxEndpoints,
});

const links: Link[] = [
  {
    label: "Synergic Health",
    url: "https://ethically-greasy-crawdad.sbx.pgsdemo.com/landing.html",
  },
  {
    label: "Advenol",
    url: "https://jovially-pure-gibbon.sbx.pgsdemo.com/",
  },
  {
    label: "Specialities",
    url: "specialities",
  },
  {
    label: "Campaign",
    url: "campaign",
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
    <div className="bg-brand-primary-dark min-h-[88px] px-12 py-6">
      <nav className="py-6 flex items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <a href="https://ethically-greasy-crawdad.sbx.pgsdemo.com/landing.html">
            <img src={c_siteLogoUrl} width="150px" height="auto"></img>
          </a>
          <div className="flex gap-x-4 text-base font-semibold text-body text-white">
            {linkDoms}
          </div>
        </div>
        <div className="space-x-5"></div>
        <SearchHeadlessProvider searcher={searcher}>
          <SearchHeader />
        </SearchHeadlessProvider>
        <div className="flex gap-x-4">
          <div className=" h-12 pt-4 ">
            <Cta
              buttonText="Patient Portal"
              url="https://ethically-greasy-crawdad.sbx.pgsdemo.com/landing.html"
              style="text-white bg-brand-primary shadow-xl hover:bg-brand-hover py-4"
              target="_self"
            ></Cta>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
