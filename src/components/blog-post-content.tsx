import * as React from "react";
import Cta from "./cta";
import { render } from "../templates/robots";
import { Image } from "@yext/pages/components";

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

const BlogPostContent = (props: any) => {
  const {
    c_blogPostContentOriginal,
    c_blogPostContentSimpleEnglish,
    c_blogPostContentForKids,
    photoGallery,
  } = props;

  return (
    <>
      <div className="uppercase py-8 gap-x-2 flex">
        <Cta
          buttonText="Original Text"
          style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal h-6"
          target="_self"
        ></Cta>
        <Cta
          buttonText="Simplified English"
          style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal h-6"
          target="_self"
        ></Cta>
        <Cta
          buttonText="For Kids"
          style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal h-6"
          target="_self"
        ></Cta>
      </div>
      <div className="">
        <div className="w-2/5 float-right py-4 pl-8 pb-8">
          {photoGallery[0] && ( <Image image={photoGallery[0]} /> )}
        </div>
        <div className="">
         {renderPostContent(c_blogPostContentOriginal)}
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
