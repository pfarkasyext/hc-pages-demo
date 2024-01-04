import * as React from "react";
import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";
import {
  ChatHeadlessProvider,
  HeadlessConfig,
} from "@yext/chat-headless-react";
import { useState } from "react";
import { IoCaretDownOutline, IoChatbubblesSharp } from "react-icons/io5";

export type KgPic = {
  url: string;
};

type Props = {
  _site: Site;
  c_siteLogo: KgPic;
  children?: React.ReactNode;
};

const chatConfig: HeadlessConfig = {
  botId: "synergic-chat",
  apiKey: "d646508806b34e8a2b6f01ee937d6698",
  analyticsConfig: {
    baseEventPayload: {
      // internalUser: false, // Boolean identifying whether traffic originated from an internal source.
      // visitor: {“email”: “user@example.com”} // Map of information about the visitor.
    },
  },
};

const PageLayout = ({ _site, c_siteLogo, children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header _site={_site} c_siteLogoUrl={c_siteLogo?.url} />
      {children}
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
