import * as React from "react";
import Cta from "./cta";

const renderPostContent = (input: any) => {
  const bodyDom: JSX.Element[] = [];
  const paragraphs = input.split("\n");
  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i] != "")
      bodyDom.push(<p className="py-4">{paragraphs[i]}</p>);
    //return `<p>${paragraphs[i]}</p>`;
  }
  return <div className="font-normal">{bodyDom}</div>;
};

const ProviderBio = (props: any) => {
  const { description } = props;

  return (
    <>
      <div className="grid">
        <div className="text-xl font-semibold">About Me</div>
        <div className="pt-4">{renderPostContent(description)}</div>
      </div>
    </>
  );
};

export default ProviderBio;
